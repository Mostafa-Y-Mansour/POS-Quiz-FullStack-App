import { Request, Response } from "express";

interface word {
  id: number;
  word: string;
  pos: string;
}

// get a random 10 words function using currying technique
const getRandomWords = (data: word[]) => (_req: Request, res: Response) => {
  const randomIndex = Math.floor((Math.random() * 5999) / 1000);

  const wordsArr: word[] = data.slice(randomIndex, randomIndex + 10);

  return res.status(200).json(wordsArr);
};

export default getRandomWords;
