import bcrypt from "bcrypt";
import { Model, isValidObjectId } from "mongoose";
import { User } from "../models/userModel";
import { IUserRepo } from "./userRepoInterface";
import { UpdateUserDto } from "../dtos/updateUserDto";

export class UserRepo implements IUserRepo {
  constructor(private userModel: Model<User>) {}

  async getAll(): Promise<User[]> {
    const users = await this.userModel.find({ deletedAt: null });
    return users;
  }

  async getAllDeleted(): Promise<User[]> {
    // ne: (not exist) extrai os usuarios que estao com o status sem 'null'

    const users = await this.userModel.find({ deletedAt: { $ne: null } });
    return users;
  }

  async softDelete(id: string): Promise<User | null> {
    if (!isValidObjectId(id)) throw new Error("User not found");
    const deleteUser = await this.userModel.findByIdAndUpdate(
      id,
      { deletedAt: new Date() },
      { new: true }
    );

    return deleteUser;
  }

  async getUserById(id: string): Promise<User | null> {
    const user = await this.userModel.findById({ _id: id });
    return user;
  }

  async restoreUser(id: string): Promise<User | null> {
    const user = await this.userModel.findByIdAndUpdate(
      id,
      { deletedAt: null },
      { new: true }
    );

    if (!user) {
      return null;
    }
    return user;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email: email });

    if (!user) {
      return null;
    }
    return user;
  }

  async updateUser(
    id: string,
    newUserData: UpdateUserDto
  ): Promise<User | null> {
    if (!isValidObjectId(id)) throw new Error("user not found");

    const user = await this.userModel.findByIdAndUpdate(id, newUserData, {
      new: true,
    });

    return user;
  }

  async addGems(id: string, addGems: number): Promise<User | null> {
    if (!isValidObjectId(id)) throw new Error("user not found");

    const addGemsUser = await this.userModel.findByIdAndUpdate(
      id,
      { gems: addGems },
      { new: true }
    );
    return addGemsUser;
  }

  async subtractGems(id: string, subtractGems: number): Promise<User | null> {
    if (!isValidObjectId(id)) throw new Error("user not found");

    const subtractGemsUser = await this.userModel.findByIdAndUpdate(
      id,
      { gems: subtractGems },
      { new: true }
    );
    return subtractGemsUser;
  }
}
