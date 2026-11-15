import { CATEGORIES, PRIORITIES } from "../../data/taskOptions";

const priorityClasses = {
  1: "bg-emerald-50 text-emerald-700",
  2: "bg-amber-50 text-amber-700",
  3: "bg-rose-50 text-rose-700",
};

export default function TaskCard({ task }) {
  const priority = PRIORITIES.find((item) => item.id === task.priority);
  const category = CATEGORIES.find((item) => item.id === task.category);
  const dueDate = task.dueDate
    ? new Date(`${task.dueDate}T00:00:00`).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <article className="task-card rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-indigo-200 hover:shadow-md">
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
    </article>
  );
}
