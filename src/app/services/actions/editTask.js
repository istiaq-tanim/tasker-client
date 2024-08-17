"use server"

import { revalidatePath } from "next/cache";

export const editTask = async (task, id) => {
      console.log(id)
      const response = await fetch(`https://todo-server-ashen.vercel.app/tasks/${id}`, {
            method: "PUT",
            headers: {
                  'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
      })
      const result = await response.json();

      revalidatePath('/');
      return result;

}