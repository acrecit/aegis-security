import React, { useState, useRef } from 'react';

interface TextAnalyzerProps {
  onAnalyze: (text: string) => void;
  analyzing: boolean;
}

export function TextAnalyzer({ onAnalyze, analyzing }: TextAnalyzerProps) {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAnalyze(text);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm text-blue-700 dark:text-blue-300">
          <p className="mb-2">
            <strong>Note:</strong> This tool uses AI to analyze legal documents. While we strive for accuracy, the analysis may occasionally:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Miss some important details or nuances</li>
            <li>Interpret ambiguous language differently than intended</li>
            <li>Generate slightly different results for the same text</li>
          </ul>
          <p className="mt-2">
            Always review the original document and consult legal professionals for important decisions.
          </p>
        </div>
        
        <textarea
          ref={textareaRef}
          className="w-full h-64 p-4 mb-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Paste your legal document here (Terms of Service, Privacy Policy, EULA, etc.)"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          disabled={analyzing || !text.trim()}
          className={`w-full py-3 px-6 text-white font-medium rounded-lg ${
            analyzing || !text.trim()
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          } transition-colors duration-200`}
        >
          {analyzing ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </span>
          ) : (
            'Analyze Document'
          )}
        </button>
      </div>
    </form>
  );
}