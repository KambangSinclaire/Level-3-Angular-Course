import { AppConfig } from "./types/constants.enum";
import { User } from "./types/user.class";
import { IUser } from "./types/user.interface";
import { UserType } from "./types/user.type";

// We shall be testing all our custom types here
const user: IUser = {
    name: '',
    age: 0,
    gender: '',
    address: '',
};

// Array of user objects
const allUsers: IUser[] = [{ name: '', address: 29210, age: 34, gender: '' }];


const usersOfClassType: User = {
    name: '', age: '', gender: '', matricule: 44545, countryOfOrigin: ''
}

const arrUsersOfClassType: User[] = [{
    name: '', age: '', gender: '', matricule: 44545, countryOfOrigin: ''
}]

let emailDomain = AppConfig.EMAIL_DOMAIN;

const areaOfCircle = 7 * 7 * AppConfig.PI;


// UserType
const randy: UserType = {
    username: '',
    email: ''
}

