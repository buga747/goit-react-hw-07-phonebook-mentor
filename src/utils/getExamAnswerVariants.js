export function getExamAnswerVariants(examWords, words, variantsValue) {
  return () => {
    const newVariants = [examWords[0]?.ukrWord];
    for (let j = 1; newVariants.length < variantsValue; j += 1) {
      const randomIndex = Math.floor(Math.random() * words.length);

      if (newVariants.includes(words[randomIndex].ukrWord)) {
        continue;
      } else {
        newVariants.push(words[randomIndex].ukrWord);
      }
    }

    return newVariants;
  };
}
