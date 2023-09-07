import Swal from "sweetalert2";

export default async function hapusKategori(id, nama, getMenu) {
  Swal.fire({
    title: "Hapus",
    text: "Anda ingin menghapus kategori " + nama + " ?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Hapus",
    cancelButtonText: "Batal",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await fetch(process.env.BASE_URL + "/api/tipe/hapus", {
        method: "POST",
        body: JSON.stringify({ id: id }),
      })
        .then((res) => {
          Swal.fire("Sukses", "Data Berhasil Dihapus", "success");
          getMenu();
        })
        .catch((err) => console.log(err));
    }
  });
}
