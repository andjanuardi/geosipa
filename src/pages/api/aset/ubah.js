import db from "@/components/db";

export default function handler(req, res) {
  if (req.method === "POST") {
    let post = JSON.parse(req.body);
    const query = `UPDATE t_aset SET id_tipe=${post.id_tipe},no_aset='${post.no_aset}',kode='${post.kode}',nama='${post.nama}',prov='${post.prov}',kab='${post.kab}',kec='${post.kec}',desa='${post.desa}',tahun=${post.tahun},sdana='${post.sdana}',fungsi='${post.fungsi}',jenis='${post.jenis}',status='${post.status}',kondisi='${post.kondisi}',kewenangan='${post.kewenangan}',lat=${post.lat},t_aset.long=${post.long},ket='${post.ket}',gambar='${post.gambar}' WHERE id=${post.id}`;
    try {
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
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
