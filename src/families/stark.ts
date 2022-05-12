import { Person } from "../personTypes";

export function createStarkTree(): Person {

    const EddardKids = [
        { name: "Rickon", children: [] },
        { name: "Bran", children: [] },
        { name: "Arya", children: [] },
        { name: "Sansan", children: [] },
        { name: "Rob", children: [] },
        { name: "Jon", children: [] }
    ]

    const RickardKids = [
        { name: "Benjen", children: [] },
        { name: "Lyanna", children: [] },
        { name: "Eddard", children: EddardKids },
        { name: "Brandon", children: [] }
    ]


    return { name: "Rickard", children: RickardKids };
}