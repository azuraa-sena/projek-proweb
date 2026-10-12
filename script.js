// ==========================================
// 1. FUNGSI NAVIGASI (PINDAH LAYAR)
// ==========================================
function bukaArena(idTujuan) {
    // Sembunyikan semua layar terlebih dahulu
    document.getElementById('menu-utama').classList.add('hidden');
    document.getElementById('arena-hewan').classList.add('hidden');
    document.getElementById('arena-benda').classList.add('hidden');
    document.getElementById('arena-jari').classList.add('hidden');
    
    // Tampilkan layar yang dituju (menghapus jubah 'hidden')
    document.getElementById(idTujuan).classList.remove('hidden');
}

// ==========================================
// 2. FUNGSI POP-UP HASIL
// ==========================================
function tampilkanHasil(teks) {
    document.getElementById("hasil-teks").innerHTML = teks;
    document.getElementById("hasil-container").classList.remove("hidden");
}

function tutupHasil() {
    document.getElementById("hasil-container").classList.add("hidden");
}

// ==========================================
// 3. LOGIKA PERMAINAN
// ==========================================

// A. Logika Suten Hewan
function mainHewan(playerChoice) {
    let choices = ["gajah", "manusia", "semut"];
    let comp = choices[Math.floor(Math.random() * 3)];
    let hasil = "";

    // Aturan: Gajah menang lwn Manusia, Manusia menang lwn Semut, Semut menang lwn Gajah
    if (playerChoice === comp) {
        hasil = "SERI!";
    } else if (
        (playerChoice === "gajah" && comp === "manusia") ||
        (playerChoice === "manusia" && comp === "semut") ||
        (playerChoice === "semut" && comp === "gajah")
    ) {
        hasil = "KAMU MENANG!";
    } else {
        hasil = "KAMU KALAH!";
    }

    tampilkanHasil(`Kamu: ${playerChoice.toUpperCase()}<br>Komputer: ${comp.toUpperCase()}<br><br><strong>${hasil}</strong>`);
}

// B. Logika Suten Benda
function mainBenda(playerChoice) {
    let choices = ["batu", "gunting", "kertas"];
    let comp = choices[Math.floor(Math.random() * 3)];
    let hasil = "";

    if (playerChoice === comp) {
        hasil = "SERI!";
    } else if (
        (playerChoice === "batu" && comp === "gunting") ||
        (playerChoice === "gunting" && comp === "kertas") ||
        (playerChoice === "kertas" && comp === "batu")
    ) {
        hasil = "KAMU MENANG!";
    } else {
        hasil = "KAMU KALAH!";
    }

    tampilkanHasil(`Kamu: ${playerChoice.toUpperCase()}<br>Komputer: ${comp.toUpperCase()}<br><br><strong>${hasil}</strong>`);
}

// C. Logika Suten Jari
function mainJari(playerChoice) {
    let choices = ["jempol", "telunjuk", "kelingking"];
    let comp = choices[Math.floor(Math.random() * 3)];
    let hasil = "";

    if (playerChoice === comp) {
        hasil = "SERI!";
    } else if (
        (playerChoice === "jempol" && comp === "telunjuk") ||
        (playerChoice === "telunjuk" && comp === "kelingking") ||
        (playerChoice === "kelingking" && comp === "jempol")
    ) {
        hasil = "KAMU MENANG!";
    } else {
        hasil = "KAMU KALAH!";
    }

    tampilkanHasil(`Kamu: ${playerChoice.toUpperCase()}<br>Komputer: ${comp.toUpperCase()}<br><br><strong>${hasil}</strong>`);
}