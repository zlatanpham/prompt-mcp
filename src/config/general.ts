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
];

export default generalTools;
