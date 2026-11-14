const initialTasks = [
  {
    id: 1,
    title: 'Plan the week',
    description: 'Review priorities and map out the main work for the week.',
    category: 3,
    priority: 3,
    status: 1,
    dueDate: '2026-11-16',
    createdAt: '2026-11-14T09:00:00.000Z',
    comments: [],
    labels: [],
  },
  {
    id: 2,
    title: 'Finish project wireframes',
    description: 'Complete the dashboard and task detail screen wireframes.',
    category: 1,
    priority: 3,
    status: 2,
    dueDate: '2026-11-18',
    createdAt: '2026-11-13T10:30:00.000Z',
    comments: [],
    labels: [],
  },
  {
    id: 3,
    title: 'Read React notes',
    description: 'Review notes on state, props, and component composition.',
    category: 2,
    priority: 2,
    status: 1,
    dueDate: '2026-11-20',
    createdAt: '2026-11-12T14:15:00.000Z',
    comments: [],
    labels: [],
  },
  {
    id: 4,
    title: 'Set up project repository',
    description: 'Create the repository and add the project README.',
    category: 1,
    priority: 1,
    status: 3,
    dueDate: '',
    createdAt: '2026-11-10T08:45:00.000Z',
    comments: [],
    labels: [],
  },
    {
    id:5,
    title: "Implement JWT Authentication",
    description:
      "Set up JSON Web Token authentication for the user login and registration endpoints. Ensure refresh tokens are securely stored in HTTP-only cookies and expire after 7 days.",
    category: 2,
    priority: 1,
    status: 2,
    createdAt: "2026-11-10T09:15:00.000Z",
    dueDate: "2026-11-18",
    comments: [
      {
        id: 1,
        content: "I've finished the login route, starting on the refresh token middleware now.",
        createdAt: "2026-11-11T14:20:00.000Z"
      },
      {
        id: 2,
        content: "Make sure to add rate-limiting to the login endpoint before merging.",
        createdAt: "2026-11-12T11:05:00.000Z"
      }
    ],
    labels: ["Backend", "Security", "API"]
  },
  {
    id: 6,
    title: "Fix Mobile Navigation Drawer Overlap",
    description:
      "On viewports narrower than 375px, the slide-out navigation menu overlaps with the sticky header logo. Adjust the z-index and padding to ensure clean alignment.",
    category: 1,
    priority: 2,
    status: 3,
    createdAt: "2026-11-12T16:45:00.000Z",
    dueDate: "2026-11-15",
    comments: [
      {
        id: 3,
        content: "Reproduced this on Safari iOS. Pushing a CSS grid fix shortly.",
        createdAt: "2026-11-13T10:12:00.000Z"
      }
    ],
    labels: ["Frontend", "Bug", "CSS", "Mobile"]
  },
  {
    id: 7,
    title: "Design Dark Mode Color Palette",
    description:
      "Create accessible dark mode contrast tokens in Figma for primary backgrounds, cards, modals, and text states. Ensure all combinations meet WCAG AA standards.",
    category: 3,
    priority: 3,
    status: 1,
    createdAt: "2026-11-14T08:00:00.000Z",
    dueDate: "2026-11-25",
    comments: [],
    labels: ["Design", "UI/UX", "Accessibility"]
  },
  {
    id: 8,
    title: "Optimize PostgreSQL Query for Dashboard Analytics",
    description:
      "The main project overview query is taking over 2.5 seconds under heavy load. Add composite indexes on the tasks table and refactor the N+1 joins.",
    category: 2,
    priority: 1,
    status: 2,
    createdAt: "2026-11-13T13:30:00.000Z",
    dueDate: "2026-11-19",
    comments: [
      {
        id: 4,
        content: "Added an index on (project_id, status). Query time is down to 180ms locally.",
        createdAt: "2026-11-14T15:10:00.000Z"
      },
      {
        id: 5,
        content: "Awesome improvement! Let's run it against the staging dataset to verify.",
        createdAt: "2026-11-14T16:00:00.000Z"
      }
    ],
    labels: ["Database", "Performance", "Backend"]
  },
  {
    id: 9,
    title: "Write Unit Tests for Drag-and-Drop Kanban Board",
    description:
      "Add Jest and React Testing Library coverage for moving task cards between columns and updating their status state automatically.",
    category: 4,
    priority: 2,
    status: 1,
    createdAt: "2026-11-14T17:20:00.000Z",
    dueDate: "2026-11-22",
    comments: [
      {
        id: 6,
        content: "Remember to mock the window.matchMedia API so the board renders properly in JSDOM.",
        createdAt: "2026-11-14T18:05:00.000Z"
      }
    ],
    labels: ["Testing", "Frontend", "React"]
  },
  {
    id: 10,
    title: 'Book annual health check',
    description: 'Find a suitable appointment and add it to the calendar.',
    category: 4,
    priority: 2,
    status: 1,
    createdAt: '2026-11-14T10:00:00.000Z',
    dueDate: '2026-11-21',
    comments: [],
    labels: ['Appointment'],
  },
  {
    id: 11,
    title: 'Restock household essentials',
    description: 'Check what is running low and pick up cleaning supplies and pantry basics.',
    category: 5,
    priority: 1,
    status: 1,
    createdAt: '2026-11-14T10:30:00.000Z',
    dueDate: '2026-11-17',
    comments: [],
    labels: ['Shopping'],
  },
  {
    id: 12,
    title: 'Review monthly budget',
    description: 'Categorize recent spending and set a savings target for next month.',
    category: 6,
    priority: 2,
    status: 2,
    createdAt: '2026-11-13T12:00:00.000Z',
    dueDate: '2026-11-20',
    comments: [],
    labels: ['Monthly'],
  },
  {
    id: 13,
    title: 'Prepare dinner with the family',
    description: 'Choose a recipe, check ingredients, and plan a relaxed evening together.',
    category: 7,
    priority: 1,
    status: 1,
    createdAt: '2026-11-14T11:00:00.000Z',
    dueDate: '2026-11-22',
    comments: [],
    labels: ['Dinner'],
  },
  {
    id: 14,
    title: 'Sort travel documents',
    description: 'Check passport validity and gather booking details for the upcoming trip.',
    category: 11,
    priority: 3,
    status: 1,
    createdAt: '2026-11-14T11:30:00.000Z',
    dueDate: '2026-11-24',
    comments: [],
    labels: ['Trip preparation'],
  }
]

export default initialTasks
