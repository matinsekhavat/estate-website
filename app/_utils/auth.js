import { hash, compare } from "bcryptjs";

export async function verifyPassword(password, hashedPassword) {
  const isPasswordValid = await compare(password, hashedPassword);
  return isPasswordValid;
}

export async function hashPassword(password) {
  const password = await hash(password, 12);
  return password;
}
