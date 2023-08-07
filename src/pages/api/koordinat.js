import db from "@/components/db";

export default function handler(req, res) {
  try {
    const query = "SELECT id,nama,lat,v_aset.long,icon,tipe FROM v_aset ";
    db.query(query, (err, ret) => {
      if (err) throw err;

      res.status(200).json(ret);
    });
  } catch (error) {
    res.status(200).json(false);
    console.log(error);
  }
}
