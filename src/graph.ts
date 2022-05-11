import { pick, randomWord } from "./randomUtils";

export interface Node {
    children: Node[];
    value: string;
}

// === Possible exercises:
// Give the algorithms for most of these, and the scholars have to implement the code.
// * list all nodes in the tree
// * state if a node of a given name is in a given tree
// * given a tree, a parent node name and a target node name, state if the target is descended from the parent (boolean)
//   * throw an error if the parent can't be found in the tree.
// * report a child's lineage, upwards through their parent to their grandparent, etc.
// * report the lineage from a given top node down to a child of a given name (or null if not in tree)
// * depth-first and breadth-first traversal
// * create a random tree (given a random name generator), which makes nodes with a chance of 0, 1, or 2 children.
// Same again, but give recursive algorithms

// Scaffolding needed: a library to visualise a given tree (perhaps ideally CLI)
// A react app to make the library clear.
// TODO: worry about difficulties of debugging a react app if the algorithm gets into an infinite loop.


export function createRandomTree(depth: number): Node {
    const children: Node[] = []
    const node = { value: randomWord(), children };
    if (depth < 0) {
        return node;
    }
    const numChildren = pick([0, 1, 1, 1, 1, 1, 2, 2, 2])
    for (let i = 0; i < numChildren; i++) {
        node.children.push(createRandomTree(depth - 1))
    }
    return node;
}
type Action = (node: Node) => void;

export function findInTree(tree: Node, soughtName: string): Node | null {
    let remainingNodesToCheck = [tree];
    while (remainingNodesToCheck.length > 0) {
        const current: Node | undefined = remainingNodesToCheck.pop()
        if (!current) {
            continue;
        }
        if (current.value === soughtName) {
            return current;
        }
        remainingNodesToCheck.push(...current?.children)
    }
    //We've been all the way through all the nodes in the tree, and found nothing.
    return null;
}

export function isChildOf(givenParent: Node, givenChildName: string): boolean {
    let remainingNodesToCheck = [givenParent];
    while (remainingNodesToCheck.length > 0) {
        const current: Node | undefined = remainingNodesToCheck.pop()
        if (!current) {
            continue;
        }
        if (current.value === givenChildName) {
            return true;
        }
        remainingNodesToCheck.push(...current?.children)
    }
    return false;
}

export function depthFirstTraverse(topNode: Node, action: Action): void {
    const stack: Node[] = [];
    stack.push(topNode);
    while (stack.length > 0) {
        const currentNode: Node = stack.pop()!
        action(currentNode);
        stack.push(...currentNode.children);
    }
}
export function breadthFirstTraverse(topNode: Node, action: Action): void {

    const queue: Node[] = [];
    queue.unshift(topNode);
    while (queue.length > 0) {
        const currentNode: Node = queue.pop()!
        action(currentNode);
        queue.unshift(...currentNode.children);
    }
}

export function toGraphViz(topNode: Node): void {
    /* Outputs a graphviz dot-format text like this, for nodes, a, b, c, where a is connected to b, and a is connected to c.
    
    digraph mygraph {
        "a"
        "b"
        "c"
        "a" -> "b"
        "a" -> "c"
      }
    */

    console.log("digraph mytree {")
    breadthFirstTraverse(topNode, (n: Node) => console.log('"' + n.value + '"'));
    breadthFirstTraverse(topNode, (n: Node) => n.children.forEach(c => console.log(`    "${n.value}" -> "${c.value}"`)))
    console.log("}")
}