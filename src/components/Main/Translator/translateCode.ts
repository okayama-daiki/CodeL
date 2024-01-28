const apiKey = import.meta.env.REACT_APP_OPENAI_API_KEY || "";

const languageCandidates = [
  "javascript",
  "python",
  "java",
  "c",
  "c++",
  "c#",
  "go",
  "ruby",
  "rust",
  "swift",
  "kotlin",
  "php",
  "typescript",
  "dart",
  "scala",
  "haskell",
  "r",
];

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
  let res: string = json?.choices[0].message.content;
  if (res.startsWith("`")) {
    res = res.slice(3, -3);
  }
  if (res.startsWith(targetLanguage)) {
    res = res.slice(targetLanguage.length);
  }
  if (res.startsWith("\n")) {
    res = res.slice(1);
  }
  return res;
};

function createPrompt(
  code: string,
  targetLanguage: string,
  originalLanguage: string
): string {
  return `Translate into ${targetLanguage}${
    originalLanguage != null ? " from" + originalLanguage : ""
  } code below.
  - I expect a code only response.
  - The code should be formatted. (follows google style guide)
  - The code must be executable.
  ${code}
  `;
}

export { translateCode, languageCandidates };
