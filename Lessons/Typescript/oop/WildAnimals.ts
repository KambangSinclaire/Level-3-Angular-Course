import { Animals } from "./Animals";

export class WildAnimals extends Animals {

    category: string[];
    constructor(someAnimalName: string, category: string[]) {
        super(someAnimalName, category);


    }
}
const lion = new WildAnimals('Lion - King Of The Jungle', []);
lion.category = ['4 legged', 'Canivorous'];
console.log('Lion Object is ', lion);

