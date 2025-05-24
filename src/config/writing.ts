const writtingTools = [
  {
    args: [
      {
        description: 'The message to be simplified.',
        name: 'message',
        type: 'string',
      },
    ],
    description: 'Write a simple English version of a given message.',
    name: 'write_simple_english',
    prompt: `Write a simple English version of the message:\n<message>\n{message}\n</message>`,
  },
  {
    args: [
      {
        description: 'The message to be simplified.',
        name: 'message',
        type: 'string',
      },
    ],
    description: 'Write a simple English version of a given message.',
    name: 'write_simple_english',
    prompt: `Write a simple English version of the message:\n<message>\n{message}\n</message>`,
  },
  {
    args: [
      {
        description:
          'The full content of the article to generate an SEO description for',
        name: 'article_content',
        type: 'string',
      },
    ],
    description:
      'Creates a compelling, search-engine optimized meta description from article content. Generates a single sentence between 120-155 characters that summarizes the main topic and includes primary keywords naturally.',
    name: 'generate_seo_description',
    prompt:
      'Act as an SEO specialist. Your task is to create a compelling, search-engine optimized meta description for the given article content.\n\nArticle Content:\n<article_content>\n{article_content}\n</article_content>\n\nGenerate exactly one sentence (120-155 characters) that:\n- Summarizes the main topic and key benefit/insight from the article\n- Includes the primary keyword naturally\n- Uses active voice and compelling language that encourages clicks\n- Avoids generic phrases and focuses on specific value\n\nOutput only the SEO description sentence, nothing else.',
  },
  {
    args: [
      {
        description:
          'The English message to be grammar corrected and simplified',
        name: 'message',
        type: 'string',
      },
    ],
    description:
      'Corrects grammar and simplifies English text to make it clear, concise, and easy to understand while preserving the original meaning.',
    name: 'correct_and_simplify_english',
    prompt:
      'Please correct the grammar and simplify the following English message. Make it clear, concise, and easy to understand while preserving the original meaning:\n\n<message>\n{message}\n</message>\n\nRequirements:\n- Fix all grammatical errors\n- Simplify complex sentences\n- Use clear, everyday language\n- Remove unnecessary words\n- Maintain the original tone and intent\n- Output only the corrected and simplified version',
  },
];

export default writtingTools;
