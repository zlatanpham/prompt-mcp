const codingTools = [
  {
    args: [
      {
        description: 'The message to be translated to git command.',
        name: 'message',
        type: 'string',
      },
    ],
    description: 'Translate the text to Git commands.',
    name: 'text_to_git_command',
    prompt: `Translate the text to Git commands. Only reply one unique code block, and nothing else. Do not write explanations.
Text: {message}`,
  },
];

export default codingTools;
