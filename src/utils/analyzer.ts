import OpenAI from 'openai';

interface AnalysisResult {
  summary: string;
  redFlags: Array<{
    explanation: string;
    originalText: string;
    location: number;
  }>;
  optOuts: Array<{ text: string; link: string }>;
  privacyScore: number;
}

interface AIConfig {
  projectKey: string;
}

let openai: OpenAI | null = null;

export function configureAI(config: AIConfig) {
  if (!config.projectKey) {
    console.warn('No API key provided');
    return;
  }

  try {
    openai = new OpenAI({
      apiKey: config.projectKey,
      dangerouslyAllowBrowser: true
    });
  } catch (error) {
    console.error('Failed to initialize OpenAI:', error);
  }
}

export async function analyzeDocument(text: string): Promise<AnalysisResult> {
  if (!openai) {
    return {
      summary: "Demo mode: This is a sample summary of the document's privacy implications.",
      redFlags: [
        {
          explanation: "Demo: This is a sample privacy concern explanation",
          originalText: "Sample text from the document",
          location: 0
        }
      ],
      optOuts: [
        {
          text: "Demo: Sample opt-out option",
          link: "https://example.com/opt-out"
        }
      ],
      privacyScore: 50
    };
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a highly critical privacy-focused legal document analyzer. Your task is to:

1. Be skeptical and cynical about data collection practices
2. Consider any ambiguous data collection practices as potentially harmful to user privacy
3. Be strict in scoring - but common industry practices should only be heavily penalized if they are vague or ambiguous
4. Explain technical terms in simple language for non-technical users
5. For each red flag, provide:
   - A simple explanation of the concern
   - The exact text from the document
   - The character position where this text appears (estimate)
6. Be especially critical of:
   - Data sharing with third parties
   - Targeted advertising
   - Data retention policies
   - Vague privacy terms
   - Limited user control
   - Broad data collection
   - Lack of user control over data
   - Lack of transparency
7. Companies that are well-known for privacy violations should be penalized more heavily, while companies with a strong reputation for privacy should be rewarded, like Proton or DuckDuckGo. Use your judgement on how much weight to give to reputation.
8. 

Format your response in JSON with this structure:
{
  "summary": "brief explanation of what the document appears to be, and a brief overview of privacy implications",
  "redFlags": [
    {
      "explanation": "Simple explanation of the concern",
      "originalText": "Exact text from document",
      "location": number (character position)
    }
  ],
  "optOuts": [
    {
      "text": "Description of opt-out option",
      "link": "URL if provided"
    }
  ],
  "privacyScore": number (0-100, be very strict in your scoring, but recognize good practices)
}`
        },
        {
          role: "user",
          content: text
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    const result = response.choices[0]?.message?.content;
    if (!result) {
      throw new Error('No response from AI service');
    }

    const parsedResult = JSON.parse(result);
    return {
      summary: parsedResult.summary,
      redFlags: parsedResult.redFlags || [],
      optOuts: parsedResult.optOuts || [],
      privacyScore: parsedResult.privacyScore 
    };
  } catch (error) {
    console.error('Error analyzing document:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to analyze document');
  }
}
