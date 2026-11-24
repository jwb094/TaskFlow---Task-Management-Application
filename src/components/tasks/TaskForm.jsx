import { useId, useState } from "react";

import { PRIORITIES } from "../../data/taskOptions";

const fieldClassName =
  "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";

export default function TaskForm({
  // Status inherited from the column where the form was opened.
  status,
  // Existing Task data for editing
  initialTask,
  // Adds the completed task to the board.
  onAddTask,
  // Closes the form without creating a task.
  onCancel,
  // Edit Completed Task Record from the board.
  onUpdateTask,
}) {
  const formId = useId();
  // Keep the editable field values together so one handler can update any field.
  const [task, setTask] = useState({
    ...initialTask,
    title: initialTask?.title ?? "",
    description: initialTask?.description ?? "",
    priority: initialTask?.priority ?? PRIORITIES[0].id,
    dueDate: initialTask?.dueDate ?? "",
  });
  // Update only the field that triggered the change.
  function handleChange(event) {
    const { name, value } = event.target;

    setTask((previousTask) => ({
      ...previousTask,
      [name]: name === "priority" ? Number(value) : value,
    }));
  }

  // Submit the task with the status of its current board column, then close.
  function handleSubmit(event) {
    event.preventDefault();

    if (initialTask) {
       onUpdateTask({
      ...task,
        id:initialTask.id,
      });
    } else {
       onAddTask({
      ...task,
        status: status.id,
      });
    }

    onCancel();
  }

  return (
    <form
      className="task-form rounded-lg border border-indigo-100 bg-white p-3 shadow-sm"
      onSubmit={handleSubmit}
      aria-label="Create task"
    >
      <div className="mb-3">
        <label
          className="block text-xs font-semibold text-slate-700"
          htmlFor={`${formId}-title`}
        >
          Title
        </label>
        <input
          className={fieldClassName}
          id={`${formId}-title`}
          name="title"
          type="text"
          placeholder="What needs to be done?"
          value={task.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label
          className="block text-xs font-semibold text-slate-700"
          htmlFor={`${formId}-description`}
        >
          Description
        </label>
        <textarea
          className={fieldClassName}
          id={`${formId}-description`}
          name="description"
          rows="3"
          placeholder="Add a few details"
          value={task.description}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3 grid grid-cols-1 gap-2">
        <div>
          <label
            className="block text-xs font-semibold text-slate-700"
            htmlFor={`${formId}-priority`}
          >
            Priority
          </label>
          <select
            className={fieldClassName}
            id={`${formId}-priority`}
            name="priority"
            value={task.priority}
            onChange={handleChange}
          >
            {/* Use the shared priority options so labels match task cards. */}
            {PRIORITIES.map((priority) => (
              <option key={priority.id} value={priority.id}>
                {priority.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-3 grid grid-cols-1 gap-2">
        <div>
          <label
            className="block text-xs font-semibold text-slate-700"
            htmlFor={`${formId}-due-date`}
          >
            Due date
          </label>
          <input
            className={fieldClassName}
            id={`${formId}-due-date`}
            name="dueDate"
            type="date"
            value={task.dueDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
          aria-label="Create task"
        >
          Create task
        </button>
      </div>
    </form>
  );
}
