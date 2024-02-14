import { UpdateUserDto } from "../dtos/updateUserDto";
import { User } from "../models/userModel";

export interface IUserRepo{
    getAll(): Promise<Array<User>>
    
    getAllDeleted(): Promise<Array<User>>

    softDelete(id:string): Promise<User|null>

    getUserById(id:string): Promise<User|null>

    restoreUser(id:string): Promise<User|null>

    getUserByEmail(email:string): Promise<User|null>

    updateUser(id:string, newUserData: UpdateUserDto): Promise<User|null>

    addGems(id:string, addGems: number): Promise<User|null>

    subtractGems(id:string, subtractGems: number): Promise<User|null>
}

