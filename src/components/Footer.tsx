import React from 'react';
import { Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              LegalLens - Making legal documents transparent and accessible
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              © {new Date().getFullYear()} LegalLens. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}