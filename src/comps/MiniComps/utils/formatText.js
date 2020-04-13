import maxWords from "./maxWords";

export default function formatText(text, limit) {
  if (text.split(" ").length >= limit) {
    console.log(text);
    return maxWords(text, limit);
  }

  return text;
}
