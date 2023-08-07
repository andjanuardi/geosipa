import db from "@/components/db";

export default function handler(req, res) {
  if (req.method === "POST") {
    let post = JSON.parse(req.body);
    const query = `SELECT id,nama,user,pass FROM t_user WHERE user='${post.user}' AND pass='${post.pass}'`;
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
