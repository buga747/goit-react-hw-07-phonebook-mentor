export const getAnswerVariants = (arr, wordLang) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const newVariants = [arr[randomIndex].wordLang];
  for (let i = 0; newVariants.length < 4; i += 1) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    if (newVariants.includes(arr[randomIndex].wordLang)) {
      continue;
    } else {
      newVariants.push(arr[randomIndex].wordLang);
    }
  }
  return newVariants;
};
