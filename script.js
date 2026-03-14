// LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
});


// NAVBAR SCROLL
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (header) {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});


// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}


// MENU FILTER
const filterButtons = document.querySelectorAll(".filter-btn");
const foodCards = document.querySelectorAll(".food-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    const activeBtn = document.querySelector(".filter-btn.active");
    if (activeBtn) {
      activeBtn.classList.remove("active");
    }

    button.classList.add("active");

    const filter = button.dataset.filter;

    foodCards.forEach(card => {

      if (filter === "all") {
        card.style.display = "block";
      } 
      else if (card.classList.contains(filter)) {
        card.style.display = "block";
      } 
      else {
        card.style.display = "none";
      }

    });

  });
});


// DARK MODE (SAFE VERSION)
const toggle = document.getElementById("theme-toggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}


// REVIEW SLIDER
let reviews = document.querySelectorAll(".review");
let index = 0;

if (reviews.length > 0) {
  setInterval(() => {

    reviews.forEach(r => r.classList.remove("active"));

    reviews[index].classList.add("active");

    index++;

    if (index >= reviews.length) {
      index = 0;
    }

  }, 3000);
}


// GALLERY AUTO SCROLL
const gallery = document.querySelector(".gallery-slider");

if (gallery) {
  setInterval(() => {
    gallery.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  }, 3000);
}


// RESERVATION FORM
const form = document.getElementById("reservation-form");

if (form) {
  form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Reservation submitted successfully!");

  });
}


// SCROLL TO TOP BUTTON
const scrollBtn = document.getElementById("scrollTop");

if (scrollBtn) {

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  scrollBtn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

}


// AUTO UPDATE YEAR
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}