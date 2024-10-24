import React from 'react';
import { Shield, Lock, UserCheck } from 'lucide-react';

export function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">About Aegis Security</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Aegis is your AI-powered assistant for understanding complex legal documents. 
          We believe that everyone deserves to understand the terms they're agreeing to, 
          without needing a law degree. Our tool analyzes privacy policies, terms of service, 
          and other legal documents to provide clear, actionable insights about your privacy and rights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <Shield className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Make legal documents transparent and accessible to everyone, promoting informed consent and digital rights awareness.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <Lock className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your documents are analyzed locally. We never store or share your data with third parties.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <UserCheck className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">User Empowerment</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We help you make informed decisions about your digital privacy and rights.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Aegis?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          In today's digital age, we're constantly agreeing to terms and conditions without fully 
          understanding their implications. Aegis uses advanced AI to break down complex legal 
          jargon into clear, actionable insights, helping you understand exactly what you're agreeing to.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Our Approach</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          We take a highly critical approach to privacy analysis, assuming that any data collection 
          could potentially impact your privacy. Our AI is trained to be skeptical and thorough, 
          ensuring you get a comprehensive understanding of potential privacy concerns.
        </p>
      </div>
    </main>
  );
}