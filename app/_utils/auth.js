import { hash, compare } from "bcryptjs";

export async function verifyPassword(password, hashedPassword) {
  const isPasswordValid = await compare(password, hashedPassword);
  return isPasswordValid;
}

export async function hashPassword(password) {
  const hashPassword = await hash(password, 12);
  return hashPassword;
}
