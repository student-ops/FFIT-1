import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await new Promise(resolve => setTimeout(resolve, 5000));
  res.status(200).send("# hello \n from api");
}

