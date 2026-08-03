const images = gsap.utils.toArray('#carousel .carousel-img');
let current = 0;

// Set initial state with GSAP instead of relying on the CSS "active" class
gsap.set(images, { opacity: 0 });
gsap.set(images[0], { opacity: 1 });

function nextSlide() {
    const next = (current + 1) % images.length;

    gsap.to(images[current], { opacity: 0, duration: 1, ease: 'power1.inOut' });
    gsap.to(images[next], { opacity: 1, duration: 1, ease: 'power1.inOut' });

    current = next;
}

setInterval(nextSlide, 4000);
window.addEventListener("mousemove",function(dets){
  gsap.to("#cursor",{
    x:dets.clientX,
    y:dets.clientY,
    ease:"power2",
  })
})
const input = document.querySelector("#courseSearch");
const container = document.querySelector("#coursesContainer");

input.addEventListener("input", () => {

    const search = input.value.trim().toLowerCase();

    const cards = [...container.querySelectorAll(".course")];

    cards.sort((a, b) => {

        const titleA = a.querySelector("h2").textContent.toLowerCase();
        const titleB = b.querySelector("h2").textContent.toLowerCase();

        const matchA = titleA.includes(search);
        const matchB = titleB.includes(search);

        if (matchA && !matchB) return -1;
        if (!matchA && matchB) return 1;

        return 0;
    });

    cards.forEach(card => container.appendChild(card));

});
const state = Flip.getState(".course");

// sort and append cards

Flip.from(state, {
    duration: 0.5,
    ease: "power2.inOut",
    absolute: true
});