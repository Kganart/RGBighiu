// Select all card pairs
const cardPairs = document.querySelectorAll(".card-pair");

// Intersection Observer options
const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px",
  threshold: 0.0001, // Trigger when the slightest part of the card is visible
};

// Callback function for the Intersection Observer
const observerCallback = (entries) => {
  const screenWidth = window.innerWidth;

  entries.forEach((entry) => {
    const cardL = entry.target.querySelector(".cards-left");
    const cardLV = entry.target.querySelector(".cards-left-vert");
    const cardC = entry.target.querySelector(".cards-center");
    const cardCV = entry.target.querySelector(".cards-center-vert");
    const cardR = entry.target.querySelector(".cards-right");
    const cardRV = entry.target.querySelector(".cards-right-vert");

    if (screenWidth < 767) {
      // For screens under 767px, add only left classes to all cards (left, center, right)
      if (entry.isIntersecting) {
        if (cardL && cardLV) {
          cardL.classList.add("rotate-card-left");
          cardLV.classList.add("rotate-vert-left");
        }
        if (cardC && cardCV) {
          cardC.classList.add("rotate-card-left"); // Use left classes
          cardCV.classList.add("rotate-vert-left"); // Use left classes
        }
        if (cardR && cardRV) {
          cardR.classList.add("rotate-card-left"); // Use left classes
          cardRV.classList.add("rotate-vert-left"); // Use left classes
        }
      } else {
        // Remove left classes for all cards when out of view
        if (cardL && cardLV) {
          cardL.classList.remove("rotate-card-left");
          cardLV.classList.remove("rotate-vert-left");
        }
        if (cardC && cardCV) {
          cardC.classList.remove("rotate-card-left");
          cardCV.classList.remove("rotate-vert-left");
        }
        if (cardR && cardRV) {
          cardR.classList.remove("rotate-card-left");
          cardRV.classList.remove("rotate-vert-left");
        }
      }
    } else {
      // For screens 767px or larger, apply respective animations
      if (entry.isIntersecting) {
        if (cardL && cardLV) {
          cardL.classList.add("rotate-card-left");
          cardLV.classList.add("rotate-vert-left");
        }
        if (cardC && cardCV) {
          cardC.classList.add("rotate-card-center");
          cardCV.classList.add("rotate-vert-center");
        }
        if (cardR && cardRV) {
          cardR.classList.add("rotate-card-right");
          cardRV.classList.add("rotate-vert-right");
        }
      } else {
        // Remove respective classes when out of view
        if (cardL && cardLV) {
          cardL.classList.remove("rotate-card-left");
          cardLV.classList.remove("rotate-vert-left");
        }
        if (cardC && cardCV) {
          cardC.classList.remove("rotate-card-center");
          cardCV.classList.remove("rotate-vert-center");
        }
        if (cardR && cardRV) {
          cardR.classList.remove("rotate-card-right");
          cardRV.classList.remove("rotate-vert-right");
        }
      }
    }
  });
};

// Create the Intersection Observer instance
const observer = new IntersectionObserver(observerCallback, options);

// Observe each card pair
cardPairs.forEach((cardPair) => observer.observe(cardPair));

// Optional: You could add a resize event listener to re-evaluate the logic when the screen is resized
window.addEventListener("resize", () => {
  // Re-run the observer callback on resize (to handle screen size changes dynamically)
  observer.disconnect(); // Stop observing
  cardPairs.forEach((cardPair) => observer.observe(cardPair)); // Re-observe after resize
});
