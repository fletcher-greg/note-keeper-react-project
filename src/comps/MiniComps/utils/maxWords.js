export default function maxWords(words, limit) {
  return (
    words
      .split(" ")
      .map((word, i) => {
        if (i >= limit) {
          return;
        }
        return word;
      })
      .filter(Boolean)
      .join(" ") + "..."
  );
}
