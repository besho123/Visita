/* ________________________________Home container 2 , 3 , 4_______________________________________________ */
// let currentIndex = 0;
// const cards = document.querySelectorAll(".card ");
// const totalCards = cards.length;
// const visibleCards = 4;

// function updateCarousel() {
//   cards.forEach((card, index) => {
//     card.style.transform = `translateX(-${currentIndex * 100}%)`;
//   });
// }

// function nextCard() {
//   if (currentIndex < totalCards - visibleCards) {
//     currentIndex++;
//     updateCarousel();
//   }
// }

// function prevCard() {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateCarousel();
//   }
// }

// updateCarousel();

let currentIndex = 0;
const carouselContainer = document.querySelector(".carousel-container"); // Corrected container
const cards = document.querySelectorAll(".card");
const totalCards = cards.length;
const visibleCards = 4;
const gap = 15;

let isDragging = false;
let startX = 0;
let scrollStart = 0;

function getCardWidth() {
  return cards[0].offsetWidth + gap;
}

function updateCarousel() {
  const scrollPosition = currentIndex * getCardWidth();
  carouselContainer.scrollTo({ // Target carouselContainer
    left: scrollPosition,
    behavior: "smooth",
  });
}

function nextCard() {
  if (currentIndex < totalCards - visibleCards) currentIndex++;
  updateCarousel();
}

function prevCard() {
  if (currentIndex > 0) currentIndex--;
  updateCarousel();
}

// Update all event listeners to use carouselContainer
carouselContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX;
  scrollStart = carouselContainer.scrollLeft;
  carouselContainer.classList.add("dragging");
});

carouselContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const x = e.pageX - startX;
  carouselContainer.scrollLeft = scrollStart - x;
});

carouselContainer.addEventListener("mouseup", () => {
  isDragging = false;
  carouselContainer.classList.remove("dragging");
  adjustIndexAfterScroll();
});

// Similar updates for touch events and other handlers...
// Ensure all scroll-related references use carouselContainer instead of cardCarousel



// For Explore Egypt Cities (home-container3)
let currentIndex1 = 0;
const carouselContainer1 = document.querySelector(".home-container3 .carousel-container");
const cards1 = document.querySelectorAll(".home-container3 .card1");
const totalCards1 = cards1.length; // Fixed variable name
const visibleCards1 = 4;
const gap1 = 15;

let isDragging1 = false;
let startX1 = 0;
let scrollStart1 = 0;

function getCardWidth1() { // Unique function name
  return cards1[0].offsetWidth + gap1; // Use gap1
}

function updateCarousel1() { // Unique function name
  const scrollPosition = currentIndex1 * getCardWidth1();
  carouselContainer1.scrollTo({
    left: scrollPosition,
    behavior: "smooth"
  });
}

function prevCardExplore() { // Matches button onclick
  if (currentIndex1 > 0) currentIndex1--;
  updateCarousel1();
}

function nextCardExplore() { // Matches button onclick
  if (currentIndex1 < totalCards1 - visibleCards1) currentIndex1++;
  updateCarousel1();
}

// Drag handlers for first carousel
carouselContainer1.addEventListener("mousedown", (e) => {
  isDragging1 = true;
  startX1 = e.pageX;
  scrollStart1 = carouselContainer1.scrollLeft;
  carouselContainer1.classList.add("dragging");
});

carouselContainer1.addEventListener("mousemove", (e) => {
  if (!isDragging1) return;
  const x = e.pageX - startX1;
  carouselContainer1.scrollLeft = scrollStart1 - x;
});

carouselContainer1.addEventListener("mouseup", () => {
  isDragging1 = false;
  carouselContainer1.classList.remove("dragging");
  adjustIndexAfterScroll1();
});

function adjustIndexAfterScroll1() {
  const cardWidth = getCardWidth1();
  const newIndex = Math.round(carouselContainer1.scrollLeft / cardWidth);
  currentIndex1 = Math.max(0, Math.min(newIndex, totalCards1 - visibleCards1));
  updateCarousel1();
}




// let currentIndex1 = 0;
// const cards1 = document.querySelectorAll(".card1 ");
// const totalCards1 = cards1.length;
// const visibleCards1 = 4;

// function updateCarousel1() {
//   cards1.forEach((card, index) => {
//     card.style.transform = `translateX(-${currentIndex * 100}%)`;
//   });
// }

// function nextCardExplore() {
//   if (currentIndex < totalCards - visibleCards) {
//     currentIndex++;
//     updateCarousel1();
//   }
// }

// function prevCardExplore() {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateCarousel1();
//   }
// }

// updateCarousel1();



// let currentIndex2 = 0;
// const cards2 = document.querySelectorAll(".card2 ");
// const totalCards2 = cards2.length;
// const visibleCards2 = 4;

// function updateCarousel2() {
//   cards2.forEach((card, index) => {
//     card.style.transform = `translateX(-${currentIndex * 100}%)`;
//   });
// }

// function nextCardTypes() {
//   if (currentIndex < totalCards - visibleCards) {
//     currentIndex++;
//     updateCarousel2();
//   }
// }

// function prevCardTypes() {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateCarousel2();
//   }
// }

// updateCarousel2();

let currentIndex2 = 0;
const carouselContainer2 = document.querySelector(".home-container4 .carousel-container");
const cards2 = document.querySelectorAll(".home-container4 .card2");
const totalCards2 = cards2.length;
const visibleCards2 = 4;
const gap2 = 15;

let isDragging2 = false;
let startX2 = 0;
let scrollStart2 = 0;

function getCardWidth2() {
  return cards2[0].offsetWidth + gap2;
}

function updateCarousel2() {
  const scrollPosition = currentIndex2 * getCardWidth2();
  carouselContainer2.scrollTo({
    left: scrollPosition,
    behavior: "smooth"
  });
}

function prevCardTypes() {
  if (currentIndex2 > 0) currentIndex2--;
  updateCarousel2();
}

function nextCardTypes() {
  if (currentIndex2 < totalCards2 - visibleCards2) currentIndex2++;
  updateCarousel2();
}

// Drag handlers for second carousel
carouselContainer2.addEventListener("mousedown", (e) => {
  isDragging2 = true;
  startX2 = e.pageX;
  scrollStart2 = carouselContainer2.scrollLeft;
  carouselContainer2.classList.add("dragging");
});

carouselContainer2.addEventListener("mousemove", (e) => {
  if (!isDragging2) return;
  const x = e.pageX - startX2;
  carouselContainer2.scrollLeft = scrollStart2 - x;
});

carouselContainer2.addEventListener("mouseup", () => {
  isDragging2 = false;
  carouselContainer2.classList.remove("dragging");
  adjustIndexAfterScroll2();
});

// Touch events for second carousel
carouselContainer2.addEventListener("touchstart", (e) => {
  isDragging2 = true;
  startX2 = e.touches[0].pageX;
  scrollStart2 = carouselContainer2.scrollLeft;
  carouselContainer2.classList.add("dragging");
});

carouselContainer2.addEventListener("touchmove", (e) => {
  if (!isDragging2) return;
  const x = e.touches[0].pageX - startX2;
  carouselContainer2.scrollLeft = scrollStart2 - x;
});

carouselContainer2.addEventListener("touchend", () => {
  isDragging2 = false;
  carouselContainer2.classList.remove("dragging");
  adjustIndexAfterScroll2();
});

function adjustIndexAfterScroll2() {
  const cardWidth = getCardWidth2();
  const newIndex = Math.round(carouselContainer2.scrollLeft / cardWidth);
  currentIndex2 = Math.max(0, Math.min(newIndex, totalCards2 - visibleCards2));
  updateCarousel2();
}

// Initialize both carousels
updateCarousel1();
updateCarousel2();

document.querySelector(".Register-user-btn").addEventListener("click", function(event) {
  event.preventDefault();
  alert("Registering as User...");
  // Implement user registration logic here
});

document.querySelector(".Register-admin-btn").addEventListener("click", function(event) {
  event.preventDefault();
  alert("Registering as Admin...");
  // Implement admin registration logic here
});

