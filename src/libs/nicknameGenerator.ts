import fs from 'fs';

const twoCharacterWord = fs.readFileSync('src/assets/2-word.txt', { encoding: 'utf-8' }).split(',');
const threeCharacterWord = fs
  .readFileSync('src/assets/2-word.txt', { encoding: 'utf-8' })
  .split(',');
const etcCharacterWord = fs.readFileSync('src/assets/2-word.txt', { encoding: 'utf-8' }).split(',');

const checkBatchimEnding = (word: string) => {
  const lastLetter = word[word.length - 1];
  const uni = lastLetter.charCodeAt(0);

  if (uni < 44032 || uni > 55203) return null;

  return (uni - 44032) % 28 != 0;
};

const randomWordType = () => {
  const idx = Math.floor(Math.random() * 10);
  if (idx >= 8) {
    return 'three word';
  }
  return idx >= 5 ? 'two word' : 'etc word';
};

export const createSentence = (): string => {
  const wordType = randomWordType();
  switch (wordType) {
    case 'two word':
      return twoCharacterWord[Math.floor(Math.random() * twoCharacterWord.length)];
    case 'three word':
      return threeCharacterWord[Math.floor(Math.random() * threeCharacterWord.length)];
    case 'etc word':
      const firstWord = etcCharacterWord[Math.floor(Math.random() * etcCharacterWord.length)];
      const isExist = checkBatchimEnding(firstWord);
      const middleText = ['의', isExist ? '과' : '와'];
      return `${firstWord}${middleText[Math.floor(Math.random() * middleText.length)]}${
        etcCharacterWord[Math.floor(Math.random() * etcCharacterWord.length)]
      }`;
  }
};
