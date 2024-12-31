document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const overlay = document.getElementById("overlay");
  const mobileMenu = document.getElementById("mobile-menu");
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };
  
  const enableScroll = () => {
    document.body.style.overflow = "";
  };
  

  if (!menuToggle || !mobileMenu || !overlay) {
    return;
  }

  // Fungsi untuk menutup menu dengan animasi
  const closeMenu = () => {
    mobileMenu.classList.remove("show");
    mobileMenu.classList.add("hide"); // Tambahkan kelas animasi slide-out
    overlay.classList.remove("show");
    menuToggle.innerHTML = `<img src="images/icon-hamburger.svg" alt="Menu" class="h-6 w-6">`;
  
    // Aktifkan scroll setelah animasi selesai
    mobileMenu.addEventListener(
      "animationend",
      () => {
        if (!mobileMenu.classList.contains("show")) {
          mobileMenu.style.display = "none";
          mobileMenu.classList.remove("hide"); // Hapus kelas hide setelah animasi selesai
          enableScroll(); // Aktifkan kembali scroll
        }
      },
      { once: true }
    );
  };

  // Fungsi untuk membuka menu dengan animasi
  const openMenu = () => {
    mobileMenu.style.display = "flex"; // Pastikan menu terlihat
    mobileMenu.classList.remove("hide");
    mobileMenu.classList.add("show"); // Tambahkan kelas animasi slide-in
    overlay.classList.add("show");
    menuToggle.innerHTML = `<img src="images/icon-close.svg" alt="Close" class="h-6 w-6">`;
  
    // Nonaktifkan scroll
    disableScroll();
  };

  // Toggle menu saat tombol diklik
  menuToggle.addEventListener("click", () => {
    if (mobileMenu.classList.contains("show")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Tutup menu saat overlay diklik
  overlay.addEventListener("click", () => {
    closeMenu();
  });

  // Seleksi semua elemen yang ingin dianimasikan
const slideDownElements = document.querySelectorAll('.slide-down');

// Buat Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Tambahkan delay dengan interval waktu untuk animasi
        setTimeout(() => {
          entry.target.classList.add('active');
        }, index * 200); // 200ms adalah jeda antara elemen
        observer.unobserve(entry.target); // Hentikan pengamatan elemen setelah animasi
      }
    });
  },
  { threshold: 0.4 }
);

// Tambahkan elemen ke observer
slideDownElements.forEach((el) => observer.observe(el));

});
