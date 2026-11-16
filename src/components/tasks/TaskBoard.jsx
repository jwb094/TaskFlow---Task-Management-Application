// import initialTasks from "../../data/initialTasks";
import { useState } from "react";
import { STATUSES } from "../../data/taskOptions";
import TaskCard from "./TaskCard";
import TaskColumn from "./TaskColumn";

export default function TaskBoard({ tasks, onAddTask }) {
  const [activeColumn, setActiveColumn] = useState(null);

  function handleExpandedColumn(status) {
    setActiveColumn((previousColumn) =>
      previousColumn === status.id ? null : status.id,
    );
  }
  function handleCloseForm() {
    setActiveColumn(null);
  }
  

  return (
    <section
      className="task-board min-w-0 overflow-x-auto overscroll-x-contain"
      id="my-tasks"
      aria-label="Task board"
    >
      <div className="task-board__columns grid min-w-max grid-flow-col auto-cols-[18rem] items-start gap-5 lg:auto-cols-[16rem]">
        {STATUSES.map((status) => {
          const statusTasks = tasks.filter((task) => task.status === status.id);
          
          return (
            <TaskColumn
              key={status.id}
              title={status.label}
              status={status}
              count={statusTasks.length}
              onToggleAddForm={() => handleExpandedColumn(status)}
              onAddTask={onAddTask}
              // onToggleAddForm={onAddTask ? () => handleExpandedColumn(status) : null}
              isExpanded={activeColumn === status.id}
              onCloseForm={handleCloseForm}
            >
              {statusTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </TaskColumn>
          );
        })}
      </div>
    </section>
  );
}
