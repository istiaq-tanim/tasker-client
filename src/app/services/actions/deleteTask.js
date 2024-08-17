"use server"

import { revalidatePath } from "next/cache";

export const deleteTask = async (id) => {
      const response = await fetch(`https://todo-server-ashen.vercel.app/tasks/${id}`, {
            method: "DELETE",
      })
      const result = await response.json();

      if (result?.success) {
            revalidatePath('/');
      }
      return result;

}