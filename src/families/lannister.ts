import { Person } from "../personTypes";

export function createLannisterTree(): Person {

    const CerceiKids = [
        {name: "Joffrey", children: []}, 
        {name: "Myrcella", children: []}, 
        {name: "Tommen", children: []}, 
    ]

    const TywinKids = [
        {name: "Cercei", children: CerceiKids}, 
        {name: "Sir Jaime", children: []}, 
        {name: "Tyrion", children: []}, 
    ]

    const TytosKids = [
        {name: "Gerion", children: []},
        {name: "Tygett", children: []},
        {name: "Kevan", children: []}, 
        {name: "Genna", children: []},
        {name: "Tywin", children: TywinKids}
    ]


    const topPerson: Person = {name: "Tytos" , children: TytosKids}

    return topPerson;
}






    //https://en.wikipedia.org/wiki/Template:Family_tree_of_Tytos_Lannister