import {db} from "../../lib/connect"

async function handler(req,res) {
   await db();
  if (req.method !== "POST") {
    res.body("This should be a POST request").send();
    return;
  }
  res.json(req.method)
}

export default handler