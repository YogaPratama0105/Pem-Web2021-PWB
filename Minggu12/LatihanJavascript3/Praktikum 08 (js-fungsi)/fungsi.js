var dataBarang = [
    "Buku Tulis",
    "Pensil",
    "Spidol"
];

var dataBuah = [
    "Nanas",
    "Apel",
    "Jeruk"
];

function showBarang(){
    var listBarang = document.getElementById("list-barang");
    // clear list barang
    listBarang.innerHTML = "";

    // cetak semua barang
    for(let i = 0; i < dataBarang.length; i++){
        var btnEdit = "<a href='#' onclick='editBarang("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deleteBarang("+i+")'>Hapus</a>";

        listBarang.innerHTML += "<li>" + dataBarang[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>"; 
    }
}

function showBuah(){
    var listBuah = document.getElementById("list-buah");
    // clear list buah
    listBuah.innerHTML = "";

    // cetak semua buah
    for(let i = 0; i < dataBuah.length; i++){
        var btnEdit = "<a href='#' onclick='editBuah("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deleteBuah("+i+")'>Hapus</a>";

        listBuah.innerHTML += "<li>" + dataBuah[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>"; 
    }
}

function addBarang(){
    var input = document.querySelector("input[name=barang]");
    dataBarang.push(input.value);
    showBarang();
}

function addBuah(){
    var input = document.querySelector("input[name=buah]");
    dataBuah.push(input.value);
    showBuah();
}

function editBarang(id){
    var newBarang = prompt("Nama baru", dataBarang[id]);
    dataBarang[id] = newBarang;
    showBarang();
}

function editBuah(id){
    var newBuah = prompt("Nama baru", dataBuah[id]);
    dataBuah[id] = newBuah;
    showBuah();
}

function deleteBarang(id){
    dataBarang.splice(id, 1);
    showBarang();
}

function deleteBuah(id){
    dataBuah.splice(id, 1);
    showBuah();
}

showBarang();
showBuah();