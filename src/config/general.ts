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
];

export default generalTools;
