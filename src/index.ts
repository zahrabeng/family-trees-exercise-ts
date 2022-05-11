import { createBaratheonTree } from "./baratheon";
import { breadthFirstTraverse, createRandomTree, depthFirstTraverse, toGraphViz } from "./graph";
import { createLannisterTree } from "./lannister";
import { createStarkTree } from "./stark";


// cmd-shift-v to view preview of graphviz file

async function mainProgram() {
  const tree = createRandomTree(5);
  // console.log(JSON.stringify(tree, null, 2));
  // console.log("DFS")
  // depthFirstTraverse(tree, n => console.log(n.value));
  // console.log("BFS")
  // breadthFirstTraverse(tree, n => console.log(n.value));
  // toGraphViz(tree);
  toGraphViz(createStarkTree());
  // toGraphViz(createLannisterTree());
  // toGraphViz(createBaratheonTree());
}

mainProgram();
