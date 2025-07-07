import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    // Optionally log the error
    console.error("Error in checkUser:", error);
    return null;
  }
};