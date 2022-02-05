// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {cats} from "../../../data";

export default function handler(req, res) {
    const {id} = req.query;
    const cat = cats.find((c) => c.id === Number(id));

    res.status(200).json(cat)
}

