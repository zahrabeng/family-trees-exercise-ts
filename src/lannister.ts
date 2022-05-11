import { Node } from "./graph";

export function createLannisterTree(): Node {
    //https://en.wikipedia.org/wiki/Template:Family_tree_of_Tytos_Lannister
    const cerseisKids: Node[] = [
        { value: "Joffrey", children: [] },
        { value: "Myrcella", children: [] },
        { value: "Tommen", children: [] },
    ]

    const tywin: Node = {
        value: "Tywin", children: [
            { value: "Cersei", children: cerseisKids },
            { value: "Ser Jaime", children: [] },
            { value: "Tyrion", children: [] },
        ]
    };

    const topNode: Node = {
        value: "Tytos", children: [tywin,
            { value: "Genna", children: [] },
            { value: "Kevan", children: [] },
            { value: "Tygett", children: [] },
            { value: "Gerion", children: [] },
        ]
    };

    return topNode;
}
