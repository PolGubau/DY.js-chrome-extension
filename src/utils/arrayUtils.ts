import { Lyric } from "../react-app-env";

export const getRandomItem = (array: Lyric[]): Lyric => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
