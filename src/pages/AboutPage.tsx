import React from 'react';
import { Shield, Lock, UserCheck } from 'lucide-react';

export function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">About Aegis Security</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          
        Aegis Security is an AI-powered assistant designed to help users,
        regardless of their technical or legal expertise, understand complex
        legal documents and how their sensitive information is being collected
        and utilized. Every year, we agree to dozens of Privacy Policies, Terms
        of Service, and EULAs—most of which we never read. This gives companies
        the opportunity to obscure data collection practices within lengthy
        documents filled with legal jargon.

        Aegis Security aims to change this by analyzing these documents and
        providing clear, actionable insights about privacy implications and user
        rights. We believe that everyone deserves to understand the terms
        they're agreeing to, without needing a law degree. By making these
        documents more accessible, we hope to push companies toward more
        transparent and ethical data collection practices, ultimately empowering
        users to make informed decisions about their digital privacy.
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