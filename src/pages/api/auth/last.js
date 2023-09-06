import db from "@/components/db";

export default function handler(req, res) {
  if (req.method === "GET") {
    const query = `UPDATE t_user SET lastlogin=CURRENT_TIMESTAMP WHERE id=${req.query.id}`;
    try {
      db.query(query, (err, ret) => {
        if (err) throw err;

        res.status(200).json(true);
      });
    } catch (error) {
      res.status(200).json(false);
      console.log(error);
    }
  }
}
