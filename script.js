const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
    sidebar.classList.remove("translate-x-full");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.add("translate-x-full");
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
        const secTop = sec.offsetTop - 120; 
        const secHeight = sec.clientHeight;
        if (pageYOffset >= secTop && pageYOffset < secTop + secHeight) {
            current = sec.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    navLinks[0].classList.add("active"); 
});

const bookingForm = document.getElementById('bookingForm');
const successMsg = document.getElementById('successMsg');
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    successMsg.classList.remove('hidden');
    bookingForm.reset();
});

const spreeForm = document.getElementById('spreeForm');
const spreeMsg = document.getElementById('spreeMsg');
spreeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    spreeMsg.classList.remove('hidden');
    spreeForm.reset();
});

ScrollReveal().reveal('.reveal', {
    distance: '50px',
    duration: 1200,
    easing: 'ease-out',
    origin: 'bottom',
    interval: 200
});

