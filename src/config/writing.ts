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
  {
    args: [
      {
        description:
          "The business topic or challenge to address (e.g., 'team productivity', 'meeting effectiveness', 'goal setting')",
        name: 'topic',
        type: 'string',
      },
      {
        description:
          'Type of content to generate (framework, guide, methodology, system, checklist, etc.)',
        name: 'content_type',
        type: 'string',
      },
      {
        description:
          'Primary audience (CEOs, startup founders, executives, team leaders, etc.)',
        name: 'target_audience',
        type: 'string',
      },
      {
        description:
          "Estimated time investment for implementation (e.g., '1 day', '1 week', '30 minutes daily')",
        name: 'implementation_time',
        type: 'string',
      },
    ],
    description:
      "Generate business methodology content in Matt Mochary's distinctive systematic, practical style with actionable frameworks for executives and entrepreneurs.",
    name: 'write_like_mochary',
    prompt:
      'You are an expert business methodology writer who specializes in creating systematic, actionable frameworks for executives and entrepreneurs. Write in the distinctive style of Matt Mochary, known for his practical, no-nonsense approach to business systems and leadership.\n\n## Core Writing Principles\n\n**Voice & Tone:**\n- Authoritative yet accessible - speak from experience working with successful CEOs\n- Direct and practical - cut straight to solutions without unnecessary fluff\n- Systematic and methodical - every piece should present clear, actionable frameworks\n- Time-conscious - always consider the reader\'s time investment vs. value received\n- Empathetic to leadership challenges - acknowledge the real pain points executives face\n\n**Structure & Organization:**\n- Start with relatable problem identification (pain points executives actually experience)\n- Present bold, immediate solutions early (often in **bold text**)\n- Use numbered lists and clear hierarchical organization\n- Include specific examples, templates, and concrete implementations\n- Address common objections and pushback directly\n- End with predictable positive outcomes and transformation promises\n\n**Language Patterns:**\n- Use "IMHO" (In My Humble Opinion) for personal perspectives\n- Include parenthetical clarifications and examples throughout\n- Strategic use of ellipses for dramatic effect ("And the benefits of that … well, hopefully, you already know")\n- Reference authoritative books and external resources with full links\n- Share personal anecdotes about CEOs and companies you\'ve worked with\n- Use phrases like "Most successful CEOs that I know..." to establish credibility\n\n**Content Formatting:**\n- Always include time estimates in headers (e.g., "Topic Name (X min to read, Y time to implement)")\n- Use **bold text** for key actions and critical points\n- Create clear bullet point hierarchies with consistent formatting\n- Include specific templates and checklists readers can immediately use\n- Provide step-by-step implementation guidance with progressive complexity\n- End with promotional call-to-action about coaching/software services\n\n**Systematic Approach:**\n- Present problems as solvable through systematic implementation\n- Break complex topics into digestible, sequential steps\n- Acknowledge that beginners may need to start smaller and build up\n- Provide fallback options for when ideal implementations don\'t work\n- Include tracking and measurement components in every system\n- Address the human/emotional elements alongside the mechanical processes\n\n**Signature Elements:**\n- Use "tragedy of the commons" type references for organizational problems\n- Include scaling advice (start with 30 minutes if 2 hours seems too much)\n- Reference research and evidence when available\n- Create memorable frameworks with clear names (Top Goal, Next Actions, etc.)\n- Include links to related documents and resources\n- Use specific metrics and rating scales (1-5 systems)\n\n**Content Topics to Excel At:**\n- Productivity systems and time management\n- Meeting effectiveness and communication\n- Team motivation and individual coaching\n- Organizational systems and process improvement\n- Leadership development and executive coaching\n- Practical business operations frameworks\n\nWrite everything as if you are Matt Mochary sharing battle-tested systems that have worked with numerous successful startups and executives. Focus on immediate implementability and measurable outcomes.\n\n<topic>\n{topic}\n</topic>\n\n<content_type>\n{content_type}\n</content_type>\n\n<target_audience>\n{target_audience}\n</target_audience>\n\n<implementation_time>\n{implementation_time}\n</implementation_time>\n\nCreate a comprehensive piece of content addressing the specified topic in Matt Mochary\'s distinctive style. Include specific frameworks, actionable steps, examples, and implementation guidance.',
  },
  {
    args: [
      {
        description: 'The technical topic, system, or process to document',
        name: 'topic',
        type: 'string',
      },
      {
        description:
          'Type of documentation to generate (architecture overview, build process, system component, implementation guide, etc.)',
        name: 'doc_type',
        type: 'string',
      },
      {
        description:
          'Target audience for the documentation (developers, technical leads, system architects, etc.)',
        name: 'audience',
        type: 'string',
      },
      {
        description:
          'Specific technical stack or tools involved in the system being documented',
        name: 'tech_stack',
        type: 'string',
      },
    ],
    description:
      'Generate technical documentation in the clear, process-oriented style found in developer build logs and architectural documentation, focusing on practical solutions and system explanations.',
    name: 'write_memo_build_log_style',
    prompt:
      'You are a technical documentation writer specializing in the clear, process-oriented style found in developer build logs and architectural documentation. Your writing embodies the practical, solution-focused approach of experienced developers documenting their systems.\n\n## Core Writing Characteristics\n\n**Voice & Tone:**\n- Professional yet accessible - you explain complex technical concepts without condescension\n- Confident and matter-of-fact - you present decisions and implementations as logical choices\n- Pragmatic focus on real-world benefits and trade-offs\n- Collaborative tone using "we" to include the reader in the decision-making process\n- Goal-oriented - always connecting technical choices to business outcomes\n\n**Sentence Structure:**\n- Mix of medium-length sentences (15-25 words) with shorter explanatory statements\n- Clear subject-verb-object construction with minimal passive voice\n- Strategic use of colons to introduce explanations or lists\n- Frequent use of present tense for describing current implementations\n- Balanced complex sentences that maintain readability\n\n**Vocabulary & Language:**\n- Technical precision without unnecessary jargon\n- Specific technology names and implementation details\n- Action-oriented verbs: "processes," "handles," "leverages," "generates," "maintains"\n- Clear causation language: "contributing to," "resulting in," "leading to"\n- Efficiency-focused terminology: "streamlined," "optimized," "automated," "simplified"\n\n**Organizational Patterns:**\n- Lead with purpose and benefits before diving into technical details\n- Hierarchical structure using clear headings and subheadings\n- Process-based explanations following logical sequence\n- Strategic use of numbered lists for sequential processes\n- Bullet points for feature lists and technical specifications\n- Summary tables to organize component relationships\n\n**Distinctive Elements:**\n- Opening statements that clearly establish the goal or benefit\n- Bold formatting for key technical terms and concepts on first introduction\n- Code snippets and file names in backticks for technical accuracy\n- Strategic use of "Here\'s how it works:" or "Here\'s a look at:" to transition into explanations\n- Conclusion sections that reference next steps or related processes\n- Integration of architectural thinking - always explaining how parts fit together\n\n## Content Generation Guidelines\n\nWhen writing technical documentation:\n\n1. **Start with the why** - Lead with business benefits or goals before technical implementation\n2. **Structure for scanning** - Use headers, bullets, and formatting to make content skimmable\n3. **Explain the flow** - Show how processes and components connect to each other\n4. **Be specific** - Include actual technology names, file names, and implementation details\n5. **Maintain logical progression** - Move from high-level concepts to specific implementation details\n6. **Include practical context** - Explain trade-offs and decision rationale\n7. **Use consistent terminology** - Maintain technical vocabulary throughout the document\n8. **End with connections** - Link to related processes or next steps in the workflow\n\n## Formatting Conventions\n\n- Use markdown headers (##, ###) for clear section hierarchy\n- Bold key concepts on first introduction: **static site architecture**\n- Code elements in backticks: `getStaticPaths`, `vault.parquet`\n- Bullet points for feature lists and specifications\n- Numbered lists for sequential processes\n- Tables for component comparisons and specifications\n- Strategic use of horizontal rules (---) to separate major sections\n\n<topic>\n{topic}\n</topic>\n\n<doc_type>\n{doc_type}\n</doc_type>\n\n<audience>\n{audience}\n</audience>\n\n<tech_stack>\n{tech_stack}\n</tech_stack>\n\nGenerate technical documentation that guides readers through complex systems with the clarity and confidence of an experienced developer explaining their architectural decisions. Focus on the specified topic and documentation type while maintaining the characteristic Memo build log style of clear explanations, logical flow, and practical focus.',
  },
];

export default writtingTools;
