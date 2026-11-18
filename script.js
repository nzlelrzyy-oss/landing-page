// 1. Fitur Interaktif: Menu Hamburger (Mobile Toggle)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menutup menu mobile otomatis saat link diklik
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 2. Fitur Interaktif: Testimonial Carousel (Slider Ulasan)
const slides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Geser otomatis ulasan setiap 5 detik
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// 3. Fitur Interaktif: Form Validation (Validasi Form Kontak/Pesan)
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman

    const nama = document.getElementById('nama').value.trim();
    const nohp = document.getElementById('nohp').value.trim();
    const pertanyaan = document.getElementById('pertanyaan').value.trim();

    if (nama === '' || nohp === '' || pertanyaan === '') {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Harap isi semua kolom (Nama, No HP, dan Pertanyaan/Pesanan)!';
    } else if (isNaN(nohp) || nohp.length < 10) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Nomor HP/WhatsApp harus berupa angka minimal 10 digit.';
    } else {
        formMessage.style.color = 'green';
        formMessage.textContent = `Terima kasih, ${nama}! Pesanan/Pesan Anda berhasil dikirim. Kami akan segera menghubungi Anda via WhatsApp.`;
        contactForm.reset();
    }
});