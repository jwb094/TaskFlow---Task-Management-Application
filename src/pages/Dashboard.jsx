import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import TaskBoard from "../components/tasks/TaskBoard";
import initialTasks from "../data/initialTasks";
export default function Dashboard() {
  const [tasks,setTasks] = useState(initialTasks);

  function handleAddTask(newTask){
    setTasks((previousTasks) => [...previousTasks,newTask])
  }
  return (
    <main
      className="dashboard__main flex w-full min-w-0 flex-1 flex-col lg:flex-row"
      id="overview"
    >
      <Sidebar />
      <div className="dashboard__content min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <header className="dashboard__header mb-8">
          <h1 className="dashboard__title !mb-2 !mt-0 !text-3xl !tracking-tight !text-slate-900">
            Your tasks
          </h1>
          <p className="dashboard__description text-sm text-slate-600 sm:text-base">
            Keep track of what needs to get done.
          </p>
        </header>
        <TaskBoard tasks={tasks} onAddTask={handleAddTask}/>
      </div>
    </main>
  );
}
