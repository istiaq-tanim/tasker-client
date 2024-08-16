import TaskBoard from "./component/Task/TaskBoard";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <TaskBoard></TaskBoard>
    </div>
  );
}
