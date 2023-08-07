import db from "@/components/db";

export default function handler(req, res) {
  if (req.method === "POST") {
    let post = JSON.parse(req.body);
    const query = `UPDATE  t_user SET nama='${post.nama}', nip='${post.nip}' WHERE id=${post.id}`;
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
