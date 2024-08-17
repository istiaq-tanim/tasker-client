"use server"

import { revalidatePath } from "next/cache";

export const addTask = async (task) => {
      const response = await fetch("https://todo-server-ashen.vercel.app/tasks", {
            method: "POST",
            headers: {
                  'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
      })
      const result = await response.json();

      revalidatePath('/');
      return result;


}