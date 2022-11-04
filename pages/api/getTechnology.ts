import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Technology } from "../../typings";
const query = groq`
        *[_type == "technology"]
`;

type Data = { technologys: Technology[] };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const technologys: Technology[] = await sanityClient.fetch(query);
  res.status(200).json({ technologys });
}
