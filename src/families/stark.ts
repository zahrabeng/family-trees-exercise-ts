import { Person } from '../personTypes'

export function createStarkTree(): Person {
    // https://en.wikipedia.org/wiki/Template:Family_tree_of_Rickard_Stark
    const nedsKids: Person[] = [
        { name: "Jon", children: [] },
        { name: "Robb", children: [] },
        { name: "Sansa", children: [] },
        { name: "Arya", children: [] },
        { name: "Bran", children: [] },
        { name: "Rickon", children: [] },
    ]

    const topPerson: Person = {
        name: "Rickard", children: [
            { name: "Brandon", children: [] },
            { name: "Eddard", children: nedsKids },
            { name: "Lyanna", children: [] },
            { name: "Benjen", children: [] }
        ]
    };

    return topPerson;
}
