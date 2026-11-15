import { Children, useId } from "react";

export default function TaskColumn({
  title = "To do",
  count,
  children,
  onAddTask,
}) {
  const headingId = useId();
  const taskCount = count ?? Children.count(children);

  return (
    <section
      className="task-column flex min-w-0 max-h-[calc(100dvh-12rem)] min-h-80 w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
      aria-labelledby={headingId}
    >
      <header className="task-column__header flex items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3">
        <div className="task-column__heading flex min-w-0 items-center gap-2">
          <span
            className="task-column__title truncate text-2xl font-semibold text-black"
            id={headingId}
          >
            {title}
          </span>
          <span className="task-column__count inline-flex min-w-6 items-center justify-center rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
            {taskCount}
          </span>
        </div>

        {onAddTask && (
          <button
            className="task-column__add-button inline-flex size-8 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="button"
            aria-label={`Add task to ${title}`}
            onClick={onAddTask}
          >
            <svg
              className="task-column__add-icon size-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 5v14m-7-7h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </header>

      <div className="task-column__content flex 
      min-h-0 flex-1 flex-col gap-3 overflow-y-auto 
      overscroll-y-contain p-3">
        {Children.count(children) > 0 ? (
          children
        ) : (
          <p className="task-column__empty rounded-lg border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-500">
            No tasks in this column yet.
          </p>
        )}
      </div>
    </section>
  );
}
