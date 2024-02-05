

type RegisterUser = {
    name: string;
    email: string;
    password: string;
}

export class RegisterUserDTO {
    name: string;
    email: string;
    password: string;

    constructor(userData: RegisterUser){
        this.name = userData.name;
        this.email = userData.email;
        this.password = userData.password;
    }
}
