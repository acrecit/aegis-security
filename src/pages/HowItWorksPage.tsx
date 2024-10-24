import React from 'react';
import { Upload, Search, AlertTriangle, CheckCircle } from 'lucide-react';

export function HowItWorksPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">How Aegis Works</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <Upload className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">1. Paste Your Document</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Simply paste any legal document - privacy policy, terms of service, or EULA - into the analyzer.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <Search className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">2. AI Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our AI breaks down the document, identifying key privacy concerns and important terms.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <AlertTriangle className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">3. Privacy Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get a detailed breakdown of privacy implications and potential red flags.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <CheckCircle className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">4. Take Action</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Review opt-out options and make informed decisions about your privacy.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">AI Analysis Details</h2>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              Our AI system is designed to be highly critical of privacy practices, analyzing documents for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Data collection and usage practices</li>
              <li>Third-party data sharing</li>
              <li>User rights and control over data</li>
              <li>Data retention policies</li>
              <li>Privacy implications of features and services</li>
              <li>Opt-out options and user choices</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Important Notes</h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
            <p className="text-yellow-800 dark:text-yellow-200 mb-4">
              While our AI is highly accurate, please note:
            </p>
            <ul className="list-disc list-inside space-y-2 text-yellow-700 dark:text-yellow-300">
              <li>AI analysis may occasionally miss nuances in complex legal language</li>
              <li>For critical decisions, always review the original document</li>
              <li>Consider consulting legal professionals for important matters</li>
              <li>The tool is designed to assist, not replace, human judgment</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}