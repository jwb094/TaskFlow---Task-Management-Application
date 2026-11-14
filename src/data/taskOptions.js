export const PRIORITIES = [
  { id:1,value: 'low', label: 'Low' },
  { id:2,value: 'medium', label: 'Medium' },
  { id:3,value: 'high', label: 'High' },
]

export const STATUSES = [
  { id:1,value: 'todo', label: 'To do' },
  { id:2,value: 'in-progress', label: 'In progress' },
  { id:3,value: 'done', label: 'Done' },
]

export const CATEGORIES = [
  { id:1,value: 'work', label: 'Work' },
  { id:2,value: 'study', label: 'Study' },
  { id:3,value: 'personal', label: 'Personal' },
  { id:4,value: 'health', label: 'Health & fitness' },
  { id:5,value: 'home', label: 'Home & chores' },
  { id:6,value: 'finance', label: 'Finance' },
  { id:7,value: 'family', label: 'Family' },
  { id:8,value: 'social', label: 'Social' },
  { id:9,value: 'errands', label: 'Errands' },
  { id:10,value: 'hobbies', label: 'Hobbies' },
  { id:11,value: 'travel', label: 'Travel' },
]

export const TASK_FILTERS = [
  { id:1,value: 'all', label: 'All tasks' },
  ...STATUSES,
]
