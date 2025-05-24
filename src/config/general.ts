const generalTools = [
  {
    args: [
      {
        description: 'The purpose of the generated prompt.',
        name: 'message',
        type: 'string',
      },
    ],
    description: 'Generate a one-shot LLM prompt template.',
    name: 'generate_one_shot_prompt',
    prompt: `
Generate a concise, high-performance one-shot LLM prompt template. This template should be based on the TEMPLATE_PURPOSE defined by the user below. The generated template must instruct an LLM to achieve this purpose when an end-user provides their specific input.

Generated Template Must Include:

LLM Role & Task: Clear, direct instruction (e.g., "Act as [Role], your task is to [Task]").

Input Placeholder: A clear and distinct placeholder within the generated template for the end-user's detailed input (e.g., [USER_INPUT_HERE] or [DETAILS_FOR_TASK]).

Output Definition: Precise instructions on the expected format, style, key elements, and any constraints for the LLM's output (e.g., length, tone, specific points to cover/avoid).

Efficiency: The generated template should be optimized for single-shot success and minimal token usage. It must be unambiguous.

<TEMPLATE_PURPOSE>
{purpose}
</TEMPLATE_PURPOSE>

Deliverable: The raw markdown text of the prompt template only. Do not include any explanatory text before or after the template itself.`,
  },
  {
    args: [
      {
        description: 'The prompt to be converted into a JSON object.',
        name: 'prompt',
        type: 'string',
      },
    ],
    description:
      'Generate a JSON object for MCP server tools from a prompt template.',
    name: 'convert_prompt_to_json_object',
    prompt: `
Act as a JSON converter for MCP server configurations. Your task is to convert the provided text prompt into a properly formatted JSON object for MCP server tools.

Input prompt to convert:
<prompt>
{prompt}
</prompt>

Output a JSON object with exactly these fields:
- name: snake_case function name derived from the prompt purpose
- description: Clear, concise description of what the function does (1-2 sentences)
- args: Array of parameter objects, each with name, type, and description
- prompt: Template string with HTML-style tag placeholders in separate blocks

Requirements:
- Use snake_case for function names
- Parameter types should be 'string', 'number', 'boolean', or 'array'
- Descriptions should be clear and professional
- Prompt templates must use HTML-style tags with parameters in separate blocks
- Each parameter should have its own tag block (e.g., <parameter_name>\n{parameter_name}\n</parameter_name>)
- Output valid JSON only, no additional text

Example format:
{
  "args": [
    {
      "description": "Parameter description",
      "name": "parameter_name",
      "type": "string"
    }
  ],
  "description": "Function description",
  "name": "function_name",
  "prompt": "Instructions here.\n<parameter_name>\n{parameter_name}\n</parameter_name>"
}
`,
  },
  {
    args: [
      {
        description:
          'The specific subject, topic, or challenge to provide tricks for',
        name: 'subject',
        type: 'string',
      },
    ],
    description:
      'Generate a list of 7-10 practical and effective tricks for any given subject or challenge, ranked by impact and usefulness.',
    name: 'list_useful_tricks',
    prompt:
      'Act as an expert advisor, your task is to identify and list the most practical and effective tricks for a specific subject or challenge.\n\nSubject/Matter: \n<subject>\n{subject}\n</subject>\n\nInstructions:\nProvide 7-10 of the most useful, actionable tricks for the specified matter. Each trick should be:\n- Immediately applicable and practical\n- Based on proven methods or best practices\n- Clearly explained in 1-2 sentences\n- Ranked roughly by impact/usefulness\n\nOutput Format:\n1. **[Trick Name]**: Brief, clear explanation of what to do and why it works\n2. **[Trick Name]**: Brief, clear explanation of what to do and why it works\n[Continue numbering...]\n\nFocus on tricks that:\n- Save time, effort, or resources\n- Solve common problems in this area\n- Are often overlooked by beginners\n- Provide disproportionate benefits for minimal effort\n\nAvoid:\n- Overly obvious advice\n- Complex methods requiring extensive preparation\n- Tricks that only work in very specific circumstances',
  },
  {
    args: [
      {
        description:
          "Array of URLs containing the author's writing samples (web pages, YouTube videos, PDFs, Google Docs, or Twitter threads)",
        name: 'author_urls',
        type: 'array',
      },
      {
        description: 'Name of the author whose writing style will be cloned',
        name: 'author_name',
        type: 'string',
      },
      {
        description:
          "Optional specific focus for the analysis (e.g., 'technical writing style', 'narrative voice', 'persuasive techniques')",
        name: 'analysis_focus',
        type: 'string',
      },
    ],
    description:
      "Fetches content from provided URLs, analyzes the author's writing patterns, and generates a complete MCP server JSON configuration for cloning their distinctive writing style.",
    name: 'clone_author_writing_style_from_urls',
    prompt:
      "Act as an expert writing style analyst and MCP configuration generator. Your task is to fetch content from provided URLs, analyze the author's distinctive writing patterns, and generate a complete MCP server JSON tool configuration for cloning their style.\n\n## Process Steps:\n\n1. **Fetch Content**: Use the appropriate content fetching tool for each URL:\n   - `get_webpage_markdown` for regular web pages\n   - `get_youtube_transcript` for YouTube videos  \n   - `get_pdf` for PDF documents\n   - `get_public_google_doc_markdown` for Google Docs\n   - `get_tweet_thread` for Twitter threads\n\n2. **Style Analysis**: Use the `clone_writing_style` tool with the fetched content to identify and document the author's unique characteristics across these dimensions:\n   - Voice & tone (formal/informal, emotional undertone, personality markers)\n   - Sentence structure (length patterns, complexity, rhythm, fragments)\n   - Vocabulary & language (technical level, word choices, metaphors, jargon)\n   - Organization patterns (intro/conclusion styles, paragraph structure, transitions)\n   - Distinctive elements (rhetorical questions, punctuation habits, signature phrases)\n\n3. **MCP JSON Generation**: Use the `convert_prompt_to_json_object` tool to convert the generated style guide into a properly formatted MCP server tool configuration\n\n<author_urls>\n{author_urls}\n</author_urls>\n\n<author_name>\n{author_name}\n</author_name>\n\n<analysis_focus>\n{analysis_focus}\n</analysis_focus>\n\n## Execution Instructions:\n\n1. **First**, fetch content from all provided URLs using the appropriate tools based on URL type\n2. **Second**, call `clone_writing_style` with:\n   - `author_samples`: All the fetched content combined\n   - `analysis_focus`: Use the provided analysis focus or default to \"Analyze writing style patterns including voice, structure, vocabulary, and distinctive elements for MCP tool creation\"\n3. **Third**, call `convert_prompt_to_json_object` with the generated style guide to create the final MCP configuration\n\n## Required Output:\n\nExecute the three tool calls in sequence, then provide only the final MCP JSON configuration that results from the `convert_prompt_to_json_object` tool. The output should be a complete, ready-to-use MCP server tool configuration for writing in the analyzed author's style.",
  },
];

export default generalTools;
