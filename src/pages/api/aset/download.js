import db from "@/components/db";

export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      const query = "SELECT * from v_laporan";

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
