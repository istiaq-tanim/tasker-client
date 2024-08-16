"use client"
import { editTask } from "@/app/services/actions/editTask";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const EditTask = ({ task }) => {
      const { register, handleSubmit } = useForm();
      const router = useRouter()
      const onSubmit = async (data) => {
            const response = await editTask(data, task?._id)
            if (response?.success) {
                  toast.success(response?.message)
                  router.push("/")
            }
      }
      return (
            <form onSubmit={handleSubmit(onSubmit)}>
                  <h2 className="mb-3 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
                        Edit Task
                  </h2>
                  <div className=" text-white space-y-5">
                        <div className="space-y-2 lg:space-y-3">
                              <label htmlFor="title">Title</label>
                              <input
                                    className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                                    type="text"
                                    id="title"
                                    {...register("title", { required: true })}
                                    defaultValue={task?.title}
                              />
                        </div>

                        <div className="space-y-2 lg:space-y-3">
                              <label htmlFor="description">Description</label>
                              <textarea
                                    className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                                    type="text"
                                    id="description"
                                    {...register("description", { required: true })}
                                    defaultValue={task?.description}
                              ></textarea>
                        </div>


                        <div className="space-y-2 lg:space-y-3">
                              <label htmlFor="priority">Priority</label>
                              <select
                                    className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                                    name="priority"
                                    id="priority"
                                    {...register("priority", { required: true })}
                                    defaultValue={task?.priority}
                              >
                                    <option value="">Select Priority</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                              </select>
                        </div>

                  </div>

                  <div className="mt-16 flex justify-center lg:mt-20">
                        <button
                              type="submit"
                              className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"

                        >
                              Save
                        </button>
                  </div>
            </form>
      );
};

export default EditTask;