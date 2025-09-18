import { NextApiRequest, NextApiResponse, PageConfig } from "next";

export const config: PageConfig = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200);
};
