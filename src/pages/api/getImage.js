import db from "@/components/db";

export default function handler(req, res) {
  if (req.method === "POST") {
    const post = JSON.parse(req.body);
    try {
      const query = `SELECT gambar from v_aset WHERE id=${post.id}`;
      db.query(query, (err, ret) => {
        if (err) throw err;
        res.status(200).json(ret);
      });
    } catch (error) {
      res.status(200).json(error);
      console.log(error);
    }
  }
}
