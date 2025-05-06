function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

const fullText = "Selamat datang di Point Hair Project!";
const textContainer = document.getElementById("animated-text");
let index = 0;

function typeEffect() {
  if (index < fullText.length) {
    textContainer.innerHTML += fullText.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeEffect, 500);
});

const stars = document.querySelectorAll('#rating span');
    let currentRating = 0;

    stars.forEach((star, idx) => {
      star.addEventListener('click', () => {
        currentRating = idx + 1;
        updateStars(currentRating);
      });

      star.addEventListener('mouseover', () => {
        updateStars(idx + 1);
      });

      star.addEventListener('mouseout', () => {
        updateStars(currentRating);
      });
    });

    function updateStars(rating) {
      stars.forEach((star, idx) => {
        star.textContent = idx < rating ? '⭐' : '☆';
      });
    }

// Form Pemesanan
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah reload halaman
  showTab("confirm"); // Tampilkan notifikasi
});
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Pesanan berhasil dikirim!");
    showTab('home');
  });
});
