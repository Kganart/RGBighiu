// FOOTER
const year = new Date().getFullYear();
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<footer>
    <div class="footer-contain bg-black text-white">
        <div class="justify-content-center">
            <div class="mx-auto row justify-content-center">
                <div class="mx-auto row justify-content-center px-2 text-center">
                    <div class="col">
                        <!-- Instagram -->
                        <a target="_blank" href="https://www.instagram.com/r.g.bighiu"><i
                                class='bx bxl-instagram about-icons justify-content-center align-self-center'></i></a>
                        <!-- Youtube -->
                        <a target="_blank" href="https://www.youtube.com/@r.g.bighiu"><i
                                class='bx bxl-youtube about-icons justify-content-center align-self-center'></i></a>
                        <!-- Medium -->
                        <a target="_blank" href="https://medium.com/@Rgbighiu"><i
                                class='bx bxl-medium about-icons justify-content-center align-self-center'></i></a>
                        <!-- Linkedin -->
                        <a target="_blank" href="https://www.linkedin.com/in/r-g-bighiu-13740795"><i
                                class='bx bxl-linkedin about-icons justify-content-center align-self-center'></i></a>
                    </div>
                </div>
                <div class="col-3 col-sm-2 px-0 justify-content-center align-self-center book-store">
                    <a target="_blank" href="https://www.amazon.co.uk/Tarot-Cards-other-poems-Bighiu/dp/B0BS8XB78F">
                        <div class="book">
                        </div>
                    </a>
                </div>
                <h5 class="text-center card-title bottom-block">© ${year} R.G. Bighiu. All rights reserved.</h5>
            </div>
        </div>
    </div>

</footer>
    `;
  }
}

customElements.define('footer-component', Footer);

// HEADER

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<nav data-bs-theme="dark" class="navbar navbar-expand-lg px-2 mb-2 sticky-top">
        <div class="container-fluid">
            <a class="justify-content-start navbar-brand align-start line-1 anim-typewriter" href="#">R.G. Bighiu</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse justify-content-end navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav  my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 350px;">
                    <li class="nav-item">
                        <a class="justify-content-end text-center nav-link" aria-current="page"
                            href="index.html">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-center justify-content-end" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Writing
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item text-center" href="essays.html">Essays</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <a class="dropdown-item text-center" href="poems.html">Poems</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <a class="dropdown-item text-center" href="short-stories.html">Short Stories</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <a class="dropdown-item text-center" href="cards.html">All</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="justify-content-end text-center nav-link" href="about.html">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;
  }
}

customElements.define('header-component', Header);

// MANDALAS

class Mandalas extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<div class="mandalaLHS1 position-fixed start-0 translate-middle">
        <img src="assets/images/mand2.png" alt="Mandala" class="mandala1  object-fit-contain img-fluid mobile-max-width"
            autoplay></img>
    </div>
    <div class="mandalaRHS1 position-fixed start-100 translate-middle">
        <img src="assets/images/mand1.png" alt="Mandala" class="mandala2  object-fit-contain img-fluid mobile-max-width"
            autoplay></img>
    </div>
    <div class="mandalaRHS2 position-fixed start-100 translate-middle">
        <img src="assets/images/mand2.png" alt="Mandala" class="mandala3  object-fit-contain img-fluid mobile-max-width"
            autoplay></img>
    </div>
    `;
  }
}

customElements.define('mandalas-component', Mandalas);


// EXPAND CARD

bigChange=document.getElementById('changeSize');
trackNum= -1;
setTimeout(function(){
  trackNum=0;
}, 2000);
//bigChange.addEventListener("animationend", () => bigChange.classList.remove('card-expand'));

//switchFunction = () => bigChange.classList.add('card-expand'); //add the class to play animation

function switchFunction() {
  if (trackNum==0) {
    bigChange.classList.remove("card-an");
    bigChange.classList.add("card-expand");
    setTimeout(function(){
      trackNum=1;
    }, 1000);
    return
  }
  if (trackNum==1) {
    bigChange.classList.remove("card-expand");
    bigChange.classList.add("card-close");
    setTimeout(function(){
      trackNum=2;
    }, 1000);
    return
  }
  else if (trackNum==2) {
    bigChange.classList.remove("card-close");
    bigChange.classList.add("card-expand");
    setTimeout(function(){
      trackNum=1;
    }, 1000);
    return
  }

}

// Shake book
// Select all card pairs
const bookPairs = document.querySelectorAll(".book-store");

// Intersection Observer options
const options1 = {
  root: null, // Use the viewport as the root
  rootMargin: "0px",
  threshold: 0.0001, // Trigger when the slightest part of the card is visible
};

// Callback function for the Intersection Observer
const observerCallback1 = (entries) => {
  const screenWidth = window.innerWidth;

  entries.forEach((entry) => {
    const book = entry.target.querySelector(".book");


      // For screens 767px or larger, apply respective animations
      if (entry.isIntersecting) {
        if (book) {
          book.classList.add("shake");
        }
      } else {
        // Remove respective classes when out of view
        if (book) {
          book.classList.remove("shake");

        }
      }
  });
};

// Create the Intersection Observer instance
const observer1 = new IntersectionObserver(observerCallback1, options1);

// Observe each card pair
bookPairs.forEach((bookPair) => observer1.observe(bookPair));

// Optional: You could add a resize event listener to re-evaluate the logic when the screen is resized
window.addEventListener("resize", () => {
  // Re-run the observer callback on resize (to handle screen size changes dynamically)
  observer1.disconnect(); // Stop observing
  bookPairs.forEach((bookPair) => observer1.observe(bookPair)); // Re-observe after resize
});

