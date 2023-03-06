export class School {
    // Getters and Setters
    // These are simple class methods that we can use to get or
    // set class properties respectively.

    name: string;
    age: string | Date | number;

    getName() {
        return this.name;
    }
    setName(inputName: string): void {
        this.name = inputName;
    }

    getAge(): string | number | Date {
        return this.age;
    }
    setAge(youssefAge: number | string | Date): void {
        this.age = youssefAge;
    }

    // Access Modifiers (The need for getters/setters)
    // OOP in TS presents to us a number of access modifiers
    // private, public, protected, readonly, static, abstract
    // They define the access level of properties/methods of a class

    // Public => Accessible to the outside world (Default behavoir of properties/
    // methods of a class)
    public readonly location: string = 'Bali';


    // Private => Accessible only within the class
    private schoolAccountBalance: number;

    getSchoolAccountBalance() {
        return this.schoolAccountBalance;
    }

}

const SAA = new School();

const ourLocation = SAA.location; // reading

// SAA.location = 'Bonamoussadi' // writing/changing

SAA.getSchoolAccountBalance();

SAA.setAge(5);
SAA.setName('Seven Advanced Academy');

console.log('SAA Age is ', SAA.age);
console.log('SAA Name is ', SAA.getName());
