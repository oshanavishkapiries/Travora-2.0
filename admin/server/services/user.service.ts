import * as UserModel from "@/server/models/user.model";
import { compare } from "@/server/utils/hashing";

export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
  role: string;
}) {
  const existing = await UserModel.getUserByEmail(data.email);
  if (existing) {
    throw new Error("User already exists");
  }
  return await UserModel.createUser(data);
}

export async function loginUser(email: string, password: string) {
  const user = await UserModel.getUserByEmail(email);
  if (!user) throw new Error("User not found");

  const isPasswordValid = await compare(password, user.password);
  if (!isPasswordValid) throw new Error("Invalid password");

  return user;
}

export async function getProfile(id: number) {
  return await UserModel.getUserById(id);
}
//hello
