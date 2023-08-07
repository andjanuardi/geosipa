import db from "@/components/db";
import { useRouter } from "next/router";

export default function handler(req, res) {
  let data = JSON.parse(req.body);

  try {
    const query =
      "SELECT id,nama,icon,lat,v_aset.long FROM v_aset where id_tipe='" +
      data.id +
      "'";
    db.query(query, (err, ret) => {
      if (err) throw err;

      res.status(200).json(ret);
    });
  } catch (error) {
    res.status(200).json(false);
    console.log(error);
  }
}
