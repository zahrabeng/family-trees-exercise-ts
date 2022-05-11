import { Node } from './graph'

export function createStarkTree(): Node {
    // https://en.wikipedia.org/wiki/Template:Family_tree_of_Rickard_Stark
    const nedsKids: Node[] = [
        { value: "Jon", children: [] },
        { value: "Robb", children: [] },
        { value: "Sansa", children: [] },
        { value: "Arya", children: [] },
        { value: "Bran", children: [] },
        { value: "Rickon", children: [] },
    ]

    const topNode: Node = {
        value: "Rickard", children: [
            { value: "Brandon", children: [] },
            { value: "Eddard", children: nedsKids },
            { value: "Lyanna", children: [] },
            { value: "Benjen", children: [] }
        ]
    };

    return topNode;
}
