/* ==========================================
   TP Studio
   script.js
========================================== */

// ---------- Mouse Glow ----------

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function (e) {

    if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    }

});

// ---------- Today's Vibe ----------

const vibeButton = document.getElementById("vibeButton");
const vibeText = document.getElementById("vibeText");

const quotes = [

    "✨ Today is a beautiful day to build something amazing.",

    "🌸 Progress is more important than perfection.",

    "💖 Keep learning. Keep growing.",

    "💻 Every line of code brings you closer to your dream.",

    "🌷 Confidence comes from practice.",

    "⭐ Great things take time."

];

if (vibeButton && vibeText) {

    vibeButton.addEventListener("click", function () {

        const random = Math.floor(Math.random() * quotes.length);

        vibeText.textContent = quotes[random];

    });

}

// ---------- Smooth Scroll ----------

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ---------- Scroll Reveal ----------

const revealElements = document.querySelectorAll(

".project-card, .skill-card, .card, .certificate"

);

function reveal() {

    revealElements.forEach(function (element) {

        const top = element.getBoundingClientRect().top;

        const visible = window.innerHeight - 120;

        if (top < visible) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

// ---------- Active Navbar ----------

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        if (pageYOffset >= section.offsetTop - 150) {

            current = section.id;

        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ---------- Contact Form ----------

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}