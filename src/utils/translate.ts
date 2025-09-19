export async function translateText(
  text: string,
  targetLang: string = "ru"
): Promise<string> {
  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      text
    )}&langpair=en|${targetLang}`
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error("Translation API error: " + errorText);
  }

  const data = await response.json();
  return data.responseData.translatedText;
}
