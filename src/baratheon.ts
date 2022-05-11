import { Node } from './graph'

export function createBaratheonTree(): Node {
    // https://en.wikipedia.org/wiki/Template:Family_tree_of_House_Baratheon

    // Note: Proper family "trees" are not trees in computer science, as their nodes have more than one parent.
    // For simplicity, in the data here, each child has only one parent represented.

    const robertsKids: Node[] = [
        { value: "Edric", children: [] },
        { value: "Mya", children: [] },
        { value: "Gendry", children: [] },
        { value: "Barra", children: [] },
        { value: "Bella", children: [] },
    ]

    const steffonsKids: Node[] = [
        { value: "Robert", children: robertsKids },
        { value: "Stannis", children: [] },
        { value: "Renly", children: [] },
    ]

    const rhaelle: Node = {
        value: "Rhaelle", children: [
            { value: "Steffon", children: steffonsKids },
        ]
    };

    return rhaelle;
}