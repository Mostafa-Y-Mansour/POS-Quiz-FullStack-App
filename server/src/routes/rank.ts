import { Request, Response } from "express";

// get the rank function using currying technique
const rank = (data: number[]) => (req: Request, res: Response) => {
  const result: number = +req.body.result;

  // filter the original array to get an array
  const filteredScore: number[] = data.filter((num: number) => num < result);

  // get the rank by comparing filteredScore to the original array rounded to the nearest hundredth.
  const rank = ((filteredScore.length / data.length) * 100).toFixed(2);

  return res.status(200).json({ rank: +rank });
};

export default rank;
