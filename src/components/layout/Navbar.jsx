import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "My Tasks", href: "#my-tasks" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <header className="navbar border-b border-slate-200 bg-white text-left shadow-sm">
      <nav
        className="navbar__nav mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between gap-x-8 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          className="navbar__brand inline-flex items-center gap-3 text-xl font-bold tracking-tight text-slate-900"
          href="#overview"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="navbar__brand-mark inline-flex size-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
            <svg
              className="navbar__brand-icon size-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m6 12.5 4 4L18.5 8"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="navbar__brand-name">TaskFlow</span>
        </a>

        <button
          className="navbar__toggle inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:hidden"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="navbar__toggle-icon size-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              className="navbar__toggle-icon size-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        <div
          className={`navbar__menu w-full flex-col pt-3 md:flex md:w-auto md:flex-1 md:flex-row md:items-center md:justify-between md:pt-0 ${
            isMenuOpen ? "flex" : "hidden"
          }`}
          id="navbar-menu"
        >
          <ul className="navbar__links flex flex-col gap-1 md:ml-8 md:flex-row md:items-center md:gap-2">
            {navItems.map((item) => (
              <li className="navbar__item" key={item.href}>
                <a
                  className="navbar__link block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            className="navbar__action mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:mt-0"
            href="#new-task"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="navbar__action-icon size-4"
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
            New task
          </a>
        </div>
      </nav>
    </header>
  );
}
