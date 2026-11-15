const navigationItems = [
  {
    label: "Overview",
    href: "#overview",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 13h7V4H4v9Zm0 7h7v-4H4v4Zm11 0h5V11h-5v9Zm0-16v4h5V4h-5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "My tasks",
    href: "#my-tasks",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="m5 12 4 4L19 6M5 5h4M5 19h14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar w-full shrink-0 border-b border-slate-200 bg-white p-3 lg:w-56 lg:border-b-0 lg:border-r lg:p-5">
      <nav className="sidebar__nav" aria-label="Workspace navigation">
        <h2 className="sidebar__title hidden px-3 pb-3 text-xs font-semibold uppercase tracking-wider text-slate-400 lg:block">
          Workspace
        </h2>
        <ul className="sidebar__list flex gap-2 overflow-x-auto lg:flex-col lg:gap-1">
          {navigationItems.map((item, index) => (
            <li className="sidebar__item shrink-0 lg:shrink" key={item.href}>
              <a
                className={`sidebar__link inline-flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  index === 0
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
                href={item.href}
                aria-current={index === 0 ? "page" : undefined}
              >
                <span className="sidebar__icon size-5 shrink-0">
                  {item.icon}
                </span>
                <span className="sidebar__label whitespace-nowrap">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
