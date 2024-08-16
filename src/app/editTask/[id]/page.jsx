import EditTask from "@/app/component/Task/EditTask";

const EditPage = async ({ params }) => {
      const { id } = params
      const response = await fetch(`http://localhost:5000/tasks/${id}`)
      const { task } = await response.json()
      return (

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4">
                        <div
                              transition
                              className="w-full max-w-lg rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >

                              <EditTask task={task}></EditTask>
                        </div>
                  </div>
            </div>


      );
};

export default EditPage;