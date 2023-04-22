export function getUkrAnswerVariants(idx, words, allWords, variantsNumber) {
  return () => {
    const newVariants = [words[idx].ukrWord];

    for (let i = 0; newVariants.length < variantsNumber; i += 1) {
      const randomIndex = Math.floor(Math.random() * words.length);

      if (newVariants.includes(allWords[randomIndex].ukrWord)) {
        continue;
      } else {
        newVariants.push(allWords[randomIndex].ukrWord);
      }
    }
    return newVariants;
  };
}
