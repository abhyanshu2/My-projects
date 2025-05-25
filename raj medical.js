// Responsive Navbar Toggle (if mobile menu is added later)
function toggleMenu() {
  const nav = document.querySelector(".main-nav");
  nav.classList.toggle("active");
}

// Medicine Search Functionality
function searchMedicine() {
  const query = document.getElementById("search").value.toLowerCase();
  const products = document.querySelectorAll(".product-card");

  products.forEach(product => {
    const name = product.querySelector("h3").textContent.toLowerCase();
    if (name.includes(query)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// Prescription Upload Validation
function uploadPrescription() {
  const fileInput = document.getElementById("prescriptionFile");
  if (fileInput.files.length > 0) {
    alert("Prescription uploaded successfully!");
  } else {
    alert("Please select a file to upload.");
  }
}

// DOM Loaded Event
document.addEventListener("DOMContentLoaded", () => {
  // Search button event
  const searchBtn = document.getElementById("searchBtn");
  if (searchBtn) {
    searchBtn.addEventListener("click", searchMedicine);
  }

  // Upload button event
  const uploadBtn = document.getElementById("uploadBtn");
  if (uploadBtn) {
    uploadBtn.addEventListener("click", uploadPrescription);
  }

  // Optional: Trigger search on typing
  const searchInput = document.getElementById("search");
  if (searchInput) {
    searchInput.addEventListener("keyup", searchMedicine);
  }
});


document.querySelector('.resource-card.health-topic').addEventListener('click', function () {
  const accordion = document.getElementById('healthAccordion');
  accordion.style.display = (accordion.style.display === 'none') ? 'block' : 'none';
});