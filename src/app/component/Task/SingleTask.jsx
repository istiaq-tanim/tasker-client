import Link from "next/link";
import DeleteTask from "./DeleteTask";

const SingleTask = ({ task, onDelete }) => {
      return (
            <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                  <td className="text-center">{task?.title}</td>
                  <td className="text-center">
                        <div>
                              {task?.description}
                        </div>
                  </td>
                  <td className="text-center">{task?.priority}</td>
                  <td>
                        <div className="flex items-center justify-center space-x-3">
                              <DeleteTask id={task._id} onDelete={onDelete}></DeleteTask>
                              <Link href={`/editTask/${task._id}`}><button className="text-blue-500">Edit</button></Link>

                        </div>
                  </td>
            </tr>

      );
};

export default SingleTask;