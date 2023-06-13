const apiKey = process.env.OPENAI_API_KEY;

const translateCode = async (
  code: string,
  originalLanguage: string,
  targetLanguage: string
): Promise<string> => {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: createPrompt(code, targetLanguage, originalLanguage),
        },
      ],
    }),
  });
  const json = await response.json();
  const res: string = json?.choices[0].message.content;
  if (res.startsWith("`")) {
    return res.slice(3, -3);
  } else {
    return res;
  }
};

function createPrompt(
  code: string,
  targetLanguage: string,
  originalLanguage: string | null = null
): string {
  return `Translate into ${targetLanguage}${
    originalLanguage != null ? " from" + originalLanguage : ""
  } code below.
  I expect a code only response.
  \`\`\`
  ${code}
  \`\`\`
  `;
}

export { translateCode };
