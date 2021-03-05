import { uuidv4 } from "../../lib/uuid";

const handler = async (req, res) => {
  const response = await fetch(
    `http://api.textcaptcha.com/gthakur581@gmail.com.json`
  );
  const data = await response.json();
  res.status(200).json({ data });
};

export default handler;
