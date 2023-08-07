import db from "@/components/db";

export default function handler(req, res) {
  if (req.method === "POST") {
    let post = JSON.parse(req.body);
    const query = `UPDATE  ref_tipe SET nama='${post.nama}', icon='${post.icon}' WHERE id=${post.id}`;
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
