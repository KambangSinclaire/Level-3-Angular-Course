export class Animals {
    name: string;
    type: string;
    dateOfBirth: string | Date | number;
    protected gender: string;
    private color: string;

    constructor(animalName: string, type: string[]) {
        this.name = animalName;
    }

    setColor() {
        this.color = 'red';
    }
}

// const tiger = new Animals('tiger');
// tiger.gender = ''