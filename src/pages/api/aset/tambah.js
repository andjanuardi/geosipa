import db from "@/components/db";

export default function handler(req, res) {
  if (req.method === "POST") {
    let post = JSON.parse(req.body);
    const query = `INSERT INTO t_aset VALUES(null, ${post.id_tipe},'${post.no_aset}','${post.kode}','${post.nama}','${post.prov}','${post.kab}','${post.kec}','${post.desa}',${post.tahun},'${post.sdana}','${post.fungsi}','${post.jenis}','${post.status}','${post.kondisi}','${post.kewenangan}',${post.lat},${post.long},'${post.ket}','${post.gambar}')`;
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
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
