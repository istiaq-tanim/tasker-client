"use client"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DeleteTask = ({ id, onDelete }) => {
      const router = useRouter();
      const handleDelete = async () => {
            const response = await fetch(`https://todo-server-ashen.vercel.app/tasks/${id}`, {
                  method: "DELETE"
            })
            const result = await response.json()
            if (result?.success) {
                  toast.success(result?.message)
                  if (onDelete) {
                        onDelete();
                  }
            }
      }
      return (
            <button onClick={() => handleDelete()} className="text-red-500">Delete</button>
      );
};

export default DeleteTask;