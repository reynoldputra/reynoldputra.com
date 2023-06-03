// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == 'POST') {
    const _res = await axios.post(process.env.SERVER_HOST + "/api/contact-us-submission", req.body)
    if (_res.status == 201) {
      res.status(201).json({ message: "Message sent" })
    } else {
      res.status(400).json({ message: "Message error" })
    }
  } else {
    res.status(404)
  }
}
