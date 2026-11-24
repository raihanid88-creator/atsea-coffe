function cekmenu() {
    var menu = document.getElementById("PilihMenu").value;
    var tampil = document.getElementById("hasilmenu");

    if (menu == "Coffe") {
        tampil.innerHTML = "Shakerato: 13.000.";
    } else if (menu == "Signature") {
        tampil.innerHTML = "Butter Scotch: 20.000.";
    } else if (menu == "Snack") {
        tampil.innerHTML = "Bread: 10.000.";
    } else {
        tampil.innerHTML = "Silahkan pilih menu terlebih dahulu!";
    }
}

function pilihcard(namaMenu, harga) {
    document.getElementById("hasilmenu").innerHTML = "Menu Dipilih: " + " - " + harga;
}
