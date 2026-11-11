
/* =========================
   1. HAMBURGER MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }

});

// Tutup menu setelah link diklik
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuToggle.innerHTML = "☰";

    });

});


/* =========================
   2. TESTIMONIAL SLIDER
========================= */

const reviews = [

    {
        text: '"Ayamnya renyah, sambalnya mantap. Harganya juga ramah di kantong!"',
        name: "Dinda - Pelanggan"
    },

    {
        text: '"Suka banget sama sambalnya! Bisa pilih level pedas sesuai selera."',
        name: "Raka - Pelanggan"
    },

    {
        text: '"Porsinya mengenyangkan dan rasanya enak. Bakal pesan lagi!"',
        name: "Sari - Pelanggan"
    }

];

let currentReview = 0;

const reviewText = document.getElementById("reviewText");
const reviewName = document.getElementById("reviewName");

function showReview(index) {

    currentReview = index;

    reviewText.textContent = reviews[currentReview].text;
    reviewName.textContent = reviews[currentReview].name;

}

// Tombol berikutnya
document.getElementById("nextReview").addEventListener("click", function () {

    currentReview++;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    showReview(currentReview);

});

// Tombol sebelumnya
document.getElementById("prevReview").addEventListener("click", function () {

    currentReview--;

    if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }

    showReview(currentReview);

});


/* =========================
   3. VALIDASI FORM KONTAK
========================= */

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const question = document.getElementById("question").value.trim();


    // Validasi kolom kosong
    if (name === "" || phone === "" || question === "") {

        formMessage.textContent =
            "Mohon lengkapi semua kolom terlebih dahulu!";

        formMessage.className = "error";

        return;

    }


    // Validasi nomor HP
    const phonePattern = /^[0-9+\-\s]{8,16}$/;

    if (!phonePattern.test(phone)) {

        formMessage.textContent =
            "Nomor HP tidak valid. Periksa kembali nomor Anda!";

        formMessage.className = "error";

        return;

    }


    // Pesan berhasil
    formMessage.textContent =
        "Terima kasih " + name +
        "! Pesan Anda berhasil divalidasi.";

    formMessage.className = "success";

    // Mengosongkan form
    contactForm.reset();

});


/* =========================
   4. TAHUN COPYRIGHT OTOMATIS
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();
