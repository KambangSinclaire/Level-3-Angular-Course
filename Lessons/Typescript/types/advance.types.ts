// Create new types from custom types using built-in advance types

import { UserType } from "./user.type";

const loginUser: Omit<UserType, "dob" | "age"> = {
    username: '',
    email: ''
}

const emailUser: Pick<UserType, "email"> = {
    email: ''
}

const optionalUser: Partial<UserType> = {};