export class Student {

    // In every JS class, there are atleast 2 methods that
    // get executed under-the-hood

    // constructor() -> This method is responsible for instantiating a class
    // This simply means that, its responsible for creating objects of a class

    // destructor() -> This method is responsible for destroying instances of a class
    // after usage (GARBAGE COLLECTION)

    // constructor(){}

    myFee: number;
    ourSchoolTimeTable: object;
    vacation?: Date | string;
    myCourses: string[];
    name: string = 'Sinclaire';
    age: number;
    gender: string;
    hasSucceeded: boolean;

    constructor(
        schoolFee: number,
        schoolTimeTabel: object,
        vacation?: Date | string,
        courses?: string[]
    ) {
        this.myCourses = courses ?? [];
        this.myFee = schoolFee;
        this.vacation = vacation;
        this.ourSchoolTimeTable = schoolTimeTabel
    }

}


const romaric = new Student(1, { ts: 'tuesday' },
    'December', ['Js', 'TS', 'Angular']);


romaric.gender = 'Male';
romaric.name = 'Mr SDD';

console.log('The student Romaric is ', romaric);

const billy = new Student(3, { opp: '5hrs' });
billy.age = 12;

console.log('The student Billy  is', billy);
