import { useEffect, useState } from "react";
import appLogo from "../assets/svg/AppLogo.svg";

function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="container mx-auto w-full shadow p-4 md:grid flex justify-between md:grid-cols-3 items-center dark:bg-gray-900 dark:text-white">
      <a href="#" className="flex items-center gap-2.5">
        <img src={appLogo} alt="App Logo" className="max-w-10" />
        <p className="md:text-2xl text-xl font-semibold">Tiktok Downloader</p>
      </a>
      <ul className="navlink md:flex items-center justify-center text-center gap-6 hidden">
        <li>
          <a href="#home" className="font-medium text-lg dark:text-gray-200">
            Home
          </a>
        </li>
        <li>
          <a href="#tutorial" className="font-medium text-lg dark:text-gray-200">
            Tutorial
          </a>
        </li>
      </ul>
      <div className="mode  items-end justify-end flex">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
        >
          {theme === "dark" ? (
            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-yellow-400"
            >
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>
          ) : (
            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-800 dark:text-gray-200"
            >
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
