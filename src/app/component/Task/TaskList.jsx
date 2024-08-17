"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SingleTask from "./SingleTask";

const TaskList = () => {
      const [tasks, setTasks] = useState([]);
      const searchParams = useSearchParams();
      const searchTerm = searchParams.get("searchTerm") || "";

      const fetchTasks = async (term = "") => {
            try {
                  const response = await fetch(`https://todo-server-ashen.vercel.app/tasks?searchTerm=${term}`, { cache: "no-store" });
                  const result = await response.json();
                  if (result.success) {
                        setTasks(result.tasks);
                  }
            } catch (error) {
                  console.error("Error fetching tasks:", error);
            }
      };

      useEffect(() => {
            fetchTasks(searchTerm);
      }, [searchTerm]);

      const handleTaskDeleted = () => {
            fetchTasks(searchTerm);
      };
      return (


            <div className="overflow-auto" >
                  <table className="table-fixed overflow-auto xl:w-full">
                        <thead>
                              <tr>
                                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title </th>
                                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description </th>
                                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority </th>
                                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options </th>
                              </tr>
                        </thead>
                        <tbody>
                              {
                                    tasks?.map(task => <SingleTask key={task._id} onDelete={handleTaskDeleted} task={task}></SingleTask>)
                              }
                        </tbody>
                  </table>
            </div >

      );
};

export default TaskList;