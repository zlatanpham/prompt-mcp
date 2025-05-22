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
];

export default writtingTools;
