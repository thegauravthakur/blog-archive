const md5 = require("md5");

export default function handler(req, res) {
  const { answer, input } = req.body;
  const hash = md5(input);
  const len = answer.filter((val) => hash === val).length;
  if (len === 1) return res.status(200).json({ correct: true });
  else res.status(200).json({ correct: false });
}
