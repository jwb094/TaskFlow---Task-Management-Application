import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import TaskBoard from "../components/tasks/TaskBoard";
import initialTasks from "../data/initialTasks";

export default function Dashboard() {
  // Keep the task list here so changes are shared across the board columns.
  const [tasks, setTasks] = useState(initialTasks);

  // Append a new task while deriving its ID from the latest task list.
  function handleAddTask(newTask) {
    setTasks((previousTasks) => {
      // Assign the new task an ID after the highest existing ID.
      const nextId = Math.max(0, ...previousTasks.map((task) => task.id)) + 1;

      return [
        ...previousTasks,
        {
          ...newTask,
          id: nextId,
        },
      ];
    });
  }

  // Apply task edits against the latest state to avoid using stale task data.
  function handleUpdateTask(updatedTask) {
    setTasks((previousTasks) =>
      // Replace the matching task and preserve every other task unchanged.
      previousTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    );
  }

  // Delete workflow: remove the selected task from the current task list.
  function handleDeleteTask(taskToBeDeleted) {
    setTasks((previousTasks) => 
      previousTasks.filter((task) => task.id !== taskToBeDeleted.id)
    );
  }

  return (
    <main
      className="dashboard__main flex w-full min-w-0 flex-1 flex-col lg:flex-row"
      id="overview"
    >
      {/* Combine workspace navigation with the task board. */}
      <Sidebar />
      <div className="dashboard__content min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {/* Introduce the task view before displaying the board. */}
        <header className="dashboard__header mb-8">
          <h1 className="dashboard__title !mb-2 !mt-0 !text-3xl !tracking-tight !text-slate-900">
            Your tasks
          </h1>
          <p className="dashboard__description text-sm text-slate-600 sm:text-base">
            Keep track of what needs to get done.
          </p>
        </header>
        {/* Pass the current tasks and creation callback down to the board. */}
        <TaskBoard
          tasks={tasks}
          onAddTask={handleAddTask}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </main>
  );
}
