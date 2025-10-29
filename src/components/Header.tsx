import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-gray-900">
            Tím 26 - LEXAI
          </Link>
          <nav>
            <ul className="flex gap-3 sm:gap-6 md:gap-8">
              <li>
                <Link
                  to="/"
                  className={`text-sm sm:text-base transition-all ${
                    isActive("/")
                      ? "text-blue-500"
                      : "text-gray-600 hover:text-blue-500"
                  }`}
                >
                  O projekte
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className={`text-sm sm:text-base transition-all ${
                    isActive("/team")
                      ? "text-blue-500"
                      : "text-gray-600 hover:text-blue-500"
                  }`}
                >
                  Tím
                </Link>
              </li>
              <li>
                <Link
                  to="/meetings"
                  className={`text-sm sm:text-base transition-all ${
                    isActive("/meetings")
                      ? "text-blue-500"
                      : "text-gray-600 hover:text-blue-500"
                  }`}
                >
                  Záznamy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
