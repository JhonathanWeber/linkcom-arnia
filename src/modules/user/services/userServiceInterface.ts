import { UpdateUserDto } from "../dtos/updateUserDto";
import { User } from "../models/userModel";

export interface IUserService {
  getAll(): Promise<Array<User>>;

  getAllDelete(): Promise<Array<User>>;

  softDelete(id: string): Promise<User>;

  getUserById(id: string): Promise<User>;

  restoreUser(id: string): Promise<User>;

  getUserByEmail(email: string): Promise<User>;

  updateUser(id: string, newUserData: UpdateUserDto): Promise<User>;

  addGems(id: string, addGems: number): Promise<User>;

  subtractGems(id: string, subtractGems: number): Promise<User>;
}
