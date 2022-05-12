import { Person } from "../personTypes";

export function createLannisterTree(): Person {
    //https://en.wikipedia.org/wiki/Template:Family_tree_of_Tytos_Lannister
    const cerseisKids: Person[] = [
        { name: "Joffrey", children: [] },
        { name: "Myrcella", children: [] },
        { name: "Tommen", children: [] },
    ]

    const tywin: Person = {
        name: "Tywin", children: [
            { name: "Cersei", children: cerseisKids },
            { name: "Ser Jaime", children: [] },
            { name: "Tyrion", children: [] },
        ]
    };

    const topPerson: Person = {
        name: "Tytos", children: [tywin,
            { name: "Genna", children: [] },
            { name: "Kevan", children: [] },
            { name: "Tygett", children: [] },
            { name: "Gerion", children: [] },
        ]
    };

    return topPerson;
}
