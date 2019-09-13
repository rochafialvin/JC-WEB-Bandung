let arrManusia = []



// Akan running ketika menekan tombol 'Tambahkan' pada Table Manusia
var inputManusia = () => {
    // Ambil data dari form
    let nama = document.getElementById('nama').value
    let umur = document.getElementById('umur').value
    let gender = document.querySelector('input[name=gender]:checked').value
    let pekerjaan = document.getElementById('pekerjaan').value

    /*
        querySelector hanya akan mencari satu element, jika sudah menemukannya, tidak akan mencari lagi
        querySelectorAll akan mencari semua element
    */

    // Tambahkan data ke array

    arrManusia.push(
        {
            nama, umur, gender,pekerjaan
        }
    )

    console.log(arrManusia)

}