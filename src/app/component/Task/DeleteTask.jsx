"use client"


import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DeleteTask = ({ id }) => {
      const router = useRouter()
      const handleDelete = async (id) => {
            const response = await fetch(`https://todo-server-ashen.vercel.app/tasks/${id}`, {
                  method: "DELETE"
            })
            const result = await response.json()
            if (result.success) {
                  toast.success(result.message)
                  router.refresh()
            }


      }
      return (
            <button onClick={() => handleDelete(id)} className="text-red-500">Delete</button>
      );
};

export default DeleteTask;