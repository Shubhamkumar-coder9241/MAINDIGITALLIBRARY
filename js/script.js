let cursor = document.querySelector("#cursor");
let main = document.querySelector("#main");
const menuBtn = document.querySelector("#menu");


document.getElementById("callBtn").addEventListener("click", function () {
    window.location.href = "tel:+919241296570";
});
   
menuBtn.addEventListener("click", () => {

    // Agar menu already exist karta hai to remove kar do
    const existingMenu = document.querySelector(".side-menu");

    if (existingMenu) {
        existingMenu.remove();
        return;
    }

    // Create Menu
    const sideMenu = document.createElement("div");
    sideMenu.className = "side-menu";

    sideMenu.innerHTML = `
        <div class="side-menu-inner">

            <button class="side-close">&times;</button>

            <nav class="side-nav">
                <ul>
                     <li><a href="index.html">HOME</a></li>
                    <li><a href="#course">MAGAZINE</a></li>
                      <li><a href="curriculum.html">CURRICULUM</a></li>
                    <li><a href="#teachersection">LAB MANUAL</a></li>
                    <li><a href="#resultsection">CHEET SHEET</a></li>
                    <li><a href="#testimonials">PREVIOUS YEAR QUESTION PAPER</a></li>
                    <li><a href="#faq">NOTES</a></li>
                
                </ul>
            </nav>

        </div>
    `;

    document.body.appendChild(sideMenu);

    // Close Button
    sideMenu.querySelector(".side-close")
        .addEventListener("click", () => {
            sideMenu.remove();
        });
});

function hoverAnimation() {

document.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('#testimonials .test-card');

  cards.forEach(function (card) {
    card.setAttribute('tabindex', '0');

    card.addEventListener('click', function (e) {
      // If the device has real hover (mouse), let CSS :hover handle it, do nothing here
      if (window.matchMedia('(hover: hover)').matches) return;

      var isOpen = card.classList.contains('slide-open');

      // close any other open card first
      cards.forEach(function (c) {
        if (c !== card) c.classList.remove('slide-open');
      });

      card.classList.toggle('slide-open', !isOpen);
    });
  });

  // tapping anywhere outside a card closes it
  document.addEventListener('click', function (e) {
    if (!e.target.closest('#testimonials .test-card')) {
      cards.forEach(function (c) { c.classList.remove('slide-open'); });
    }
  });
});
}
hoverAnimation();