import db from "@/components/db";

export default function handler(req, res) {
  if (req.method === "POST") {
    let post = JSON.parse(req.body);
    try {
      const query = "SELECT * FROM v_aset WHERE id=" + post.id;

      db.query(query, (err, ret) => {
        if (err) throw err;
        res.status(200).json(ret);
      });
    } catch (error) {
      res.status(200).json(false);
      console.log(error);
    }
  }
}
