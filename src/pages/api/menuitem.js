import db from "@/components/db";

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      const query = `SELECT v_aset.ket, 
      v_aset.icon, 
      v_aset.long, 
      v_aset.lat, 
      v_aset.kewenangan, 
      v_aset.kondisi, 
      v_aset.status, 
      v_aset.jenis, 
      v_aset.fungsi, 
      v_aset.tahun, 
      v_aset.sdana, 
      v_aset.desa, 
      v_aset.kec, 
      v_aset.kab, 
      v_aset.prov, 
      v_aset.nama, 
      v_aset.kode, 
      v_aset.no_aset, 
      v_aset.id_tipe, 
      v_aset.tipe, 
      v_aset.id from v_aset `;
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
