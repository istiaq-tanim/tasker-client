import AddTask from "../component/Task/AddTask";

const AddPage = () => {
      return (
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4">
                        <div
                              transition
                              className="w-full max-w-lg rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >

                              <AddTask></AddTask>
                        </div>
                  </div>
            </div>


      );
};

export default AddPage;