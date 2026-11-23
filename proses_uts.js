function cekmenu() {
    var menu = document.getElementById("PilihMenu").value;
    var tampil = document.getElementById("hasilmenu");

    if (menu == "Coffe") {
        tampil.innerHTML = "Kopsus Desire: 17.000.";
    } else if (menu == "Tea") {
        tampil.innerHTML = "Thai Tea: 15.000.";
    } else if (menu == "Snack") {
        tampil.innerHTML = "Mix Plater: 10.000.";
    } else {
        tampil.innerHTML = "Silahkan pilih menu terlebih dahulu!";
    }
}

function pilihcard(namaMenu, harga) {
    document.getElementById("hasilmenu").innerHTML = "Menu Dipilih: " + " - " + harga;
}