import db from "@/components/db";

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      const query = "SELECT * from v_aset ";
      db.query(query, (err, ret) => {
        if (err) throw err;
        res.status(200).json(ret);
      });
    } catch (error) {
      res.status(200).json(error);
      console.log(error);
    }
  }
  if (req.method === "POST") {
    const post = JSON.parse(req.body);
    if (post.q === "") {
      res.status(200).json([]);
      return;
    }
    try {
      const query = `SELECT id,id_tipe,jenis,lat,v_aset.long,nama from v_aset WHERE LOWER(nama) LIKE  LOWER('%${post.q}%') LIMIT 5`;
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
