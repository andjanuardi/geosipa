import db from "@/components/db";
import { faker } from "@faker-js/faker";

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      let labels = [];
      let stat = [];
      const query =
        "SELECT tipe as label, count(*) as data FROM v_aset GROUP BY tipe  ";

      db.query(query, (err, ret) => {
        if (err) throw err;

        ret.map((d) => {
          let t = {
            label: d.label,
            data: [d.data],
            backgroundColor: faker.color.rgb(),
          };
          stat.push(t);
        });
        ret.map((d) => labels.push(d.label));

        res.status(200).json({ labels, stat });
      });
    } catch (error) {
      res.status(200).json(false);
      console.log(error);
    }
  }
}
