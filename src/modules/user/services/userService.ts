import { UpdateUserDto } from "./../dtos/updateUserDto";
import { User } from "../models/userModel";
import { IUserRepo } from "../repos/userRepoInterface";
import { IUserService } from "./userServiceInterface";
import { isValidObjectId } from "mongoose";

//regra de negocio
export class UserService implements IUserService {
  constructor(private userRepo: IUserRepo) { }

  async getAll(): Promise<User[]> {
    const users = await this.userRepo.getAll();

    if (!users || users.length === 0) {
      throw new Error("User not found");
    }
    return users;
  }

  async getAllDelete(): Promise<User[]> {
    const users = await this.userRepo.getAllDeleted();

    if (!users || users.length === 0) throw new Error("User not found");

    return users;
  }
  async getUserById(id: string): Promise<User> {
    if (!isValidObjectId(id)) throw new Error("User not found!");

    const user = await this.userRepo.getUserById(id);

    if (!user) throw new Error("User not found");

    return user;
  }

  async softDelete(id: string): Promise<User> {
    if (!isValidObjectId(id)) throw new Error("User not found!");

    const user = await this.userRepo.getUserById(id);

    if (!user) throw new Error("User not found");

    const deleteUser = await this.userRepo.softDelete(id);

    if (!deleteUser) throw new Error("User not found");

    return deleteUser;
  }

  async restoreUser(id: string): Promise<User> {
    if (!isValidObjectId(id)) throw new Error("User not found!");

    const userInactive = await this.userRepo.getUserById(id);

    if (!userInactive) throw new Error("User not found");

    const user = await this.userRepo.restoreUser(id);

    if (!user) throw new Error("User not found");

    return user;
  }

  async getUserByEmail(email: string): Promise<User> {
    const userEmail = await this.userRepo.getUserByEmail(email);
    if (!userEmail) throw new Error("Email not found");

    return userEmail;
  }

  async updateUser(id: string, newUserData: UpdateUserDto): Promise<User> {
    if (!isValidObjectId(id)) throw new Error("User not found!");
    const user = await this.userRepo.getUserById(id);

    if (!user) throw new Error("User not found");

    const updateUser = await this.userRepo.updateUser(id, newUserData);

    if (!updateUser) throw new Error("User not update");

    return updateUser;
  }

  async addGems(id: string, addGems: number): Promise<User> {
    if (!isValidObjectId(id)) throw new Error("User not found!");

    const user = await this.userRepo.getUserById(id);

    if (!user) throw new Error("Error when searching for user! ");

    if (addGems < 0) throw new Error("Add value bigger then zero!");

    if (addGems > 100) throw new Error("maximum gems value is 100!");

    const gems: number = user.gems;

    const newGems = gems + addGems;

    const addGemsUser = await this.userRepo.addGems(id, newGems);

    if (!addGemsUser) throw new Error("Error adding gems!");

    return addGemsUser;
  }

}
