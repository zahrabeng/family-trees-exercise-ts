import { Person } from "../personTypes";

export function logAllPeopleInTreeRecursive(person: Person): void {
    console.log(person.name);
    person.children.forEach(kid => logAllPeopleInTreeRecursive(kid));
}

export function logAllPeopleInTree(topPerson: Person): void {
    const stack: Person[] = [];
    stack.push(topPerson);
    while (stack.length > 0) {
        const currentPerson = stack.pop();
        if (currentPerson) {
            console.log(currentPerson.name);
            stack.push(...[...currentPerson.children].reverse());
        }
    }
}
export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
    const queue: Person[] = [];
    queue.unshift(topPerson);
    while (queue.length > 0) {
        const currentPerson = queue.pop();
        if (currentPerson) {
            console.log(currentPerson.name);
            queue.unshift(...currentPerson.children);
        }
    }
}