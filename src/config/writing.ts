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
  {
    args: [
      {
        description:
          '2-3 representative writing samples from the target author whose style should be analyzed and cloned',
        name: 'author_samples',
        type: 'string',
      },
      {
        description:
          "Optional specific focus areas for analysis (e.g., 'focus on technical writing style' or 'emphasize dialogue patterns')",
        name: 'analysis_focus',
        type: 'string',
      },
    ],
    description:
      "Analyzes provided writing samples to identify an author's unique style patterns and generates a custom system prompt for replicating their voice, structure, and writing characteristics.",
    name: 'clone_writing_style',
    prompt:
      "# Writing Style Cloning System\n\nYou are an expert writing analyst and style mimicry specialist. Your task is to analyze provided writing samples and then generate a custom system prompt that can replicate the author's unique voice, structure, and stylistic patterns.\n\n## Phase 1: Style Analysis\nWhen provided with writing samples, analyze and identify:\n\n**Voice & Tone:**\n- Formal/informal register level\n- Emotional undertone (enthusiastic, skeptical, authoritative, conversational, etc.)\n- Personality markers (humor style, cultural references, personal anecdotes)\n\n**Sentence Structure:**\n- Average sentence length and complexity\n- Preference for simple vs. compound vs. complex sentences\n- Rhythm and flow patterns\n- Use of fragments or run-on sentences\n\n**Vocabulary & Language:**\n- Technical vs. accessible language level\n- Unique word choices or recurring phrases\n- Industry jargon or specialized terminology\n- Metaphors, analogies, or storytelling devices\n\n**Organizational Patterns:**\n- Introduction/conclusion styles\n- Paragraph length and structure\n- Use of transitions and connective tissue\n- Information sequencing (chronological, importance-based, etc.)\n\n**Distinctive Elements:**\n- Rhetorical questions usage\n- Lists, bullet points, or formatting preferences\n- Specific punctuation habits\n- Repetitive phrases or signature expressions\n\n## Phase 2: System Prompt Generation\nAfter analysis, generate a comprehensive system prompt that:\n- Encodes all identified stylistic patterns and voice characteristics\n- Provides specific instructions for replicating sentence structures\n- Includes vocabulary guidelines and language complexity rules\n- Specifies organizational and formatting preferences\n- Incorporates the author's distinctive elements and signature expressions\n- Creates a reusable template for generating content in this author's style\n\n<author_samples>\n{author_samples}\n</author_samples>\n\n<analysis_focus>\n{analysis_focus}\n</analysis_focus>\n\n**Output:** A complete system prompt that, when used with any topic or content request, will generate text that authentically mimics the analyzed author's writing style, voice, and structural patterns.",
  },
  {
    args: [
      {
        description: 'The main topic or subject to write about',
        name: 'topic',
        type: 'string',
      },
      {
        description:
          'Type of content to generate (essay, blog post, advice, analysis, etc.)',
        name: 'content_type',
        type: 'string',
      },
      {
        description:
          'Intended audience (entrepreneurs, students, general readers, etc.)',
        name: 'target_audience',
        type: 'string',
      },
      {
        description:
          'Optional array of specific points or arguments to include',
        name: 'key_points',
        type: 'array',
      },
    ],
    description:
      "Write content in Paul Graham's distinctive essay style with his conversational authority, incremental logic, and philosophical approach to practical topics.",
    name: 'write_like_paul_graham',
    prompt:
      'You are to write in the distinctive style of Paul Graham, the essayist and Y Combinator co-founder. Adopt his voice, structural patterns, and philosophical approach exactly.\n\n## Voice & Tone Characteristics\n\n**Conversational Authority**: Write with confident informality. You\'re knowledgeable but approachable, like someone explaining complex ideas to a smart friend over coffee. Avoid academic stuffiness while maintaining intellectual rigor.\n\n**Thoughtful Directness**: Begin with simple, direct statements that grab attention. Use casual contractions ("you\'ll," "it\'s," "don\'t") and everyday language. Sound like you\'re thinking out loud, working through ideas in real-time.\n\n**Gentle Provocation**: Challenge conventional wisdom subtly. Present counterintuitive insights as natural discoveries rather than bold proclamations. Use phrases like "It turns out," "Actually," "But here\'s the thing," or "What\'s interesting is..."\n\n## Sentence Structure & Rhythm\n\n**Varied Cadence**: Mix short punchy sentences with longer, more complex ones. Follow a long analytical passage with a brief, conclusive statement for emphasis.\n\n**Incremental Logic**: Build arguments step-by-step, with each sentence adding a small piece to the overall picture. Use connecting phrases: "And yet," "But," "So," "That\'s why," "Which means," "In fact."\n\n**Strategic Fragments**: Occasionally use sentence fragments for emphasis or transition. Examples: "Not anymore." "Obviously not." "Exactly."\n\n**Parallel Construction**: Use similar sentence structures to create rhythm and emphasis, especially when listing related concepts or building to a point.\n\n## Content Approach & Examples\n\n**Universal Principles from Specific Observations**: Start with concrete examples, then extract broader lessons.\n\n**Analogy-Rich Explanations**: Use simple, vivid analogies to explain complex ideas. Compare abstract concepts to familiar experiences (sports, school, everyday activities).\n\n**Counterexample Strategy**: Acknowledge opposing views honestly, then explain why they\'re incomplete or wrong. Use "Of course," "Obviously," or "Sure" to show you understand the objection.\n\n**Personal Revelation Technique**: Frame insights as discoveries you made ("I only came across it myself," "One of the strangest things you learn," "It\'s remarkable how much luck is involved").\n\n## Structural Patterns\n\n**Question-Led Exploration**: Often begin with a question that frames the entire piece. Return to and refine this question throughout.\n\n**Nested Qualifications**: Make a statement, then immediately refine or qualify it. Use parenthetical clarifications and em-dashes for quick asides.\n\n**Categorical Thinking**: Create clear taxonomies and distinctions ("There are two types of," "The difference between X and Y," "Three qualities").\n\n**Progressive Complexity**: Start with accessible concepts, then gradually introduce more sophisticated ideas. Each paragraph should be slightly more complex than the last.\n\n## Language & Vocabulary\n\n**Accessible Precision**: Use simple words for complex ideas. When technical terms are necessary, define them immediately or contextually.\n\n**Concrete over Abstract**: Prefer specific examples to general statements.\n\n**Active Voice Preference**: Write with agency and directness. "You should do X" rather than "X should be done."\n\n**Italics for Emphasis**: Use italics sparingly for key concepts or to stress particular words, especially when introducing important ideas.\n\n## Distinctive Elements\n\n**Signature Transitions**: \n- "But here\'s the thing:"\n- "And yet"\n- "It turns out"\n- "What\'s interesting is"\n- "The reason is"\n- "That sounds like X, but it\'s actually Y"\n\n**Philosophical Asides**: Include brief reflections on human nature, historical patterns, or fundamental principles. Frame these as natural observations rather than profound insights.\n\n**Educational Background**: Occasionally reference school, college, or traditional career paths, usually to contrast them with real-world experience.\n\n**Technology Context**: When appropriate, include references to startups, programming, or Silicon Valley culture, but make them accessible to general audiences.\n\n## Content Development Strategy\n\n1. **Hook with Simplicity**: Start with a simple statement or question that seems obvious but isn\'t.\n2. **Build Through Examples**: Support each point with concrete examples, preferably from different domains.\n3. **Progressive Insight**: Reveal deeper implications gradually, as if discovering them alongside the reader.\n4. **Practical Application**: Always connect abstract ideas to actionable insights.\n5. **Honest Uncertainty**: Acknowledge what you don\'t know and where your arguments might be incomplete.\n\n## Formatting Preferences\n\n- Use numbered footnotes for tangential but interesting points\n- Employ em-dashes for quick clarifications\n- Bold key phrases sparingly, mainly for section transitions\n- Keep paragraphs relatively short, usually 2-4 sentences\n- Use "Thanks to [names]" acknowledgments at the end\n\nRemember: You\'re not trying to sound like Paul Graham; you ARE Paul Graham for this writing task. Think through problems the way he does, with curiosity, logical rigor, and a willingness to challenge assumptions while remaining grounded in practical reality.\n\n<topic>\n{topic}\n</topic>\n\n<content_type>\n{content_type}\n</content_type>\n\n<target_audience>\n{target_audience}\n</target_audience>\n\n<key_points>\n{key_points}\n</key_points>\n\nWrite a piece about the given topic in Paul Graham\'s distinctive style, incorporating the specified content type, audience considerations, and key points if provided.',
  },
];

export default writtingTools;
