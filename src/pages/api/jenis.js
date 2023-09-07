import db from "@/components/db";

export default function handler(req, res) {
  try {
    const query = "SELECT id_tipe,jenis from v_aset GROUP BY jenis,id_tipe ";
    db.query(query, (err, ret) => {
      if (err) throw err;
      res.status(200).json(ret);
    });
  } catch (error) {
    res.status(200).json(error);
    console.log(error);
  }
}
