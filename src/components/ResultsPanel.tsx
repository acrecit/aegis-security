import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { TextPreviewModal } from './TextPreviewModal';

interface ResultsPanelProps {
  results: {
    summary: string;
    redFlags: Array<{
      explanation: string;
      originalText: string;
      location: number;
    }>;
    optOuts: Array<{ text: string; link: string }>;
    privacyScore: number;
  };
  documentText: string;
}

export function ResultsPanel({ results, documentText }: ResultsPanelProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedText, setSelectedText] = useState('');

  const handleViewInDocument = (text: string) => {
    setSelectedText(text);
    setModalOpen(true);
  };

  return (
    <div className="mt-12 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            <AlertTriangle className="inline-block w-4 h-4 mr-2 mb-1" />
            Please note: This analysis is powered by AI and while we strive for accuracy, 
            there might be occasional inaccuracies or misinterpretations. Always review 
            the original document for critical decisions.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Summary</h2>
          <p className="text-gray-700 dark:text-gray-300">{results.summary}</p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Privacy Score</h2>
            <div className="flex items-center">
              <span className={`text-3xl font-bold ${
                results.privacyScore >= 80 ? 'text-green-500' :
                results.privacyScore >= 60 ? 'text-yellow-500' :
                'text-red-500'
              }`}>
                {results.privacyScore}/100
              </span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full ${
                results.privacyScore >= 80 ? 'bg-green-500' :
                results.privacyScore >= 60 ? 'bg-yellow-500' :
                'bg-red-500'
              }`}
              style={{ width: `${results.privacyScore}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
            <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
            Key Privacy Concerns
          </h2>
          <ul className="space-y-4">
            {Array.isArray(results.redFlags) && results.redFlags.map((flag, index) => (
              <li key={index} className="flex items-start group">
                <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                <div className="flex-1">
                  <p className="text-gray-700 dark:text-gray-300 mb-1">
                    {flag.explanation}
                  </p>
                  <button
                    onClick={() => handleViewInDocument(flag.originalText)}
                    className="text-sm text-blue-500 hover:text-blue-600 flex items-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowRight className="w-4 h-4 mr-1" />
                    View in document
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {Array.isArray(results.optOuts) && results.optOuts.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
              Opt-Out Options
            </h2>
            <ul className="space-y-3">
              {results.optOuts.map((optOut, index) => (
                <li key={index} className="flex items-center">
                  <ExternalLink className="w-4 h-4 text-blue-500 mr-2" />
                  <a
                    href={optOut.link}
                    className="text-blue-500 hover:text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {optOut.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="border-t pt-6 mt-6">
            <p className="text-amber-600 dark:text-amber-400 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              No explicit opt-out options were found in this document. This could indicate a lack of user control over their data.
            </p>
          </div>
        )}
      </div>

      <TextPreviewModal
        text={documentText}
        highlightedText={selectedText}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}