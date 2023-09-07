import Swal from "sweetalert2";

export default async function hapus(id, nama, reloadData) {
  Swal.fire({
    title: "Hapus",
    text: `Anda ingin menghapus  ${nama} ?`,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Hapus",
    cancelButtonText: "Batal",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await fetch(process.env.BASE_URL + "/api/aset/hapus", {
        method: "POST",
        body: JSON.stringify({ id: id }),
      })
        .then((res) => {
          Swal.fire("Sukses", "Data Berhasil Dihapus", "success");
          reloadData();
        })
        .catch((err) => console.log(err));
    }
  });
}
