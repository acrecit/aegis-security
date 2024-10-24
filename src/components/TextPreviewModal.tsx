import React from 'react';
import { X } from 'lucide-react';

interface TextPreviewModalProps {
  text: string;
  highlightedText: string;
  isOpen: boolean;
  onClose: () => void;
}

export function TextPreviewModal({ text, highlightedText, isOpen, onClose }: TextPreviewModalProps) {
  if (!isOpen) return null;

  // Get context around the highlighted text (300 characters before and after)
  const index = text.indexOf(highlightedText);
  const start = Math.max(0, index - 300);
  const end = Math.min(text.length, index + highlightedText.length + 300);
  const contextText = text.slice(start, end);

  // Split the context into before, highlight, and after
  const beforeHighlight = contextText.slice(0, index - start);
  const afterHighlight = contextText.slice(index - start + highlightedText.length);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Document Context</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 overflow-y-auto">
          <div className="prose dark:prose-invert max-w-none">
            <p className="whitespace-pre-wrap">
              {beforeHighlight}
              <mark className="bg-yellow-200 dark:bg-yellow-500/30 px-1 rounded">
                {highlightedText}
              </mark>
              {afterHighlight}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}