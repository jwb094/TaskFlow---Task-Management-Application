import { useState } from "react";
import { CATEGORIES, PRIORITIES } from "../../data/taskOptions";
import TaskForm from "./TaskForm";

const priorityClasses = {
  1: "bg-emerald-50 text-emerald-700",
  2: "bg-amber-50 text-amber-700",
  3: "bg-rose-50 text-rose-700",
};

export default function TaskCard({ task, onUpdateTask }) {
  // Resolve display-only task metadata from the shared option lists.
  // Match stored IDs to the shared option data used by the board.
  const priority = PRIORITIES.find((item) => item.id === task.priority);
  const category = CATEGORIES.find((item) => item.id === task.category);
  // Parse date-only values as local dates to avoid timezone shifting the day.
  const dueDate = task.dueDate
    ? new Date(`${task.dueDate}T00:00:00`).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
      })
    : null;

  // Track whether this card shows task details or the edit workflow.
  const [isEditing, setEditing] = useState(false);

  // Toggle edit mode so the same control can open and close it.
  function handleEditClick() {
    setEditing((previousState) => !previousState);
  }
  return (
    <article className="task-card rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-indigo-200 hover:shadow-md">
      {/* Editing workflow: switch to the form, then return to the card after saving or cancelling. */}
      {isEditing ? (
        <TaskForm
          initialTask={task}
          onUpdateTask={onUpdateTask}
          onCancel={() => setEditing(false)}
        />
      ) : (
        <>
          {/* Card actions workflow: edit or delete this task. */}
          <div className=" task-card__actions | flex items-start mb-3">
            <ul className="flex flex-row justify-between w-full">
              <li>
                {/* Edit Button */}
                <button
                  aria-label={`Edit ${task.title}`}
                  className="rounded-full"
                  onClick={handleEditClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </button>
              </li>
              <li>
                {/* Delete Button */}
                <button
                  aria-label={`Delete ${task.title}`}
                  className="rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          {/* Task summary workflow: show the title and priority. */}
          <div className="task-card__top mb-3 flex items-start justify-between gap-3">
            <h3 className="task-card__title text-sm font-semibold leading-5 text-slate-900">
              {task.title}
            </h3>
            {priority && (
              <span
                className={`task-card__priority shrink-0 rounded-full px-2 py-1 text-xs font-medium ${
                  priorityClasses[priority.id]
                }`}
              >
                {priority.label}
              </span>
            )}
          </div>

          <p className="task-card__description line-clamp-3 text-sm leading-5 text-slate-600">
            {task.description}
          </p>

          {/* Task organization workflow: display labels when present. */}
          {task.labels?.length > 0 && (
            <ul className="task-card__labels mt-3 flex flex-wrap gap-1.5">
              {task.labels.slice(0, 3).map((label) => (
                <li
                  className="task-card__label rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700"
                  key={label}
                >
                  {label}
                </li>
              ))}
              {task.labels.length > 3 && (
                <li className="task-card__label-more px-1 py-1 text-xs text-slate-500">
                  +{task.labels.length - 3}
                </li>
              )}
            </ul>
          )}

          {/* Task metadata workflow: show category, due date, and comment count. */}
          <footer className="task-card__footer mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3 text-xs text-slate-500">
            {category && (
              <span className="task-card__category">{category.label}</span>
            )}
            <div className="task-card__meta ml-auto flex items-center gap-3">
              {dueDate && <time dateTime={task.dueDate}>{dueDate}</time>}
              {task.comments?.length > 0 && (
                <span className="task-card__comments">
                  {task.comments.length}{" "}
                  {task.comments.length === 1 ? "comment" : "comments"}
                </span>
              )}
            </div>
          </footer>
        </>
      )}
    </article>
  );
}
