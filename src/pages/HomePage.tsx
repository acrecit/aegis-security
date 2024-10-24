import React, { useState, useEffect } from 'react';
import { TextAnalyzer } from '../components/TextAnalyzer';
import { ResultsPanel } from '../components/ResultsPanel';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { analyzeDocument, configureAI } from '../utils/analyzer';

export function HomePage() {
  const [analyzing, setAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [documentText, setDocumentText] = useState<string>('');
  const [results, setResults] = useState<null | {
    summary: string;
    redFlags: {
      explanation: string;
      originalText: string;
      location: number;
    }[];
    optOuts: {
      text: string;
      link: string;
    }[];
    privacyScore: number;
  }>(null);

  useEffect(() => {
    configureAI({
      projectKey: import.meta.env.VITE_OPENAI_API_KEY || ''
    });
  }, []);

  const handleAnalyze = async (text: string) => {
    try {
      setAnalyzing(true);
      setError(null);
      setDocumentText(text);
      const analysis = await analyzeDocument(text);
      setResults(analysis);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to analyze document');
      console.error('Analysis error:', err);
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Understand Legal Documents in Seconds
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Paste any Terms of Service, Privacy Policy, or EULA to get a clear summary, 
          identify red flags, and understand privacy implications.
        </p>
      </section>

      <ErrorBoundary>
        <TextAnalyzer onAnalyze={handleAnalyze} analyzing={analyzing} />
        
        {error && (
          <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg">
            {error}
          </div>
        )}
        
        {results && <ResultsPanel results={results} documentText={documentText} />}
      </ErrorBoundary>
    </main>
  );
}