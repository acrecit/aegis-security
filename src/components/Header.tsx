import React from 'react';
import { Shield, Github } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">LegalLens</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/about"
                  className={`transition-colors ${
                    location.pathname === '/about'
                      ? 'text-blue-500'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className={`transition-colors ${
                    location.pathname === '/how-it-works'
                      ? 'text-blue-500'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'
                  }`}
                >
                  How it Works
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Joshvvin/legal-lens"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}