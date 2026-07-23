// ================= MOBILE MENU =================

const menuIcon = document.getElementById("menu-icon");

const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon =
        menuIcon.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


// Close menu after clicking link

document.querySelectorAll(".navbar a")
.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon =
            menuIcon.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


// ================= DARK MODE =================

const themeToggle =
    document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon =
        themeToggle.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});


// Load saved theme

if (
    localStorage.getItem("theme")
    === "dark"
) {

    document.body.classList.add("dark");

    themeToggle
        .querySelector("i")
        .classList
        .replace(
            "fa-moon",
            "fa-sun"
        );

}


// ================= TYPING EFFECT =================

const typingText =
    document.querySelector(".typing-text");

const words = [

    "Web Developer",

    "C++ Programmer",

    "AI/ML Enthusiast",

    "Problem Solver"

];

let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];

    if (isDeleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex--
            );

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex++
            );

    }


    let speed =
        isDeleting
            ? 70
            : 120;


    if (
        !isDeleting &&
        charIndex ===
        currentWord.length + 1
    ) {

        speed = 1500;

        isDeleting = true;

    }


    if (
        isDeleting &&
        charIndex === 0
    ) {

        isDeleting = false;

        wordIndex++;

        if (
            wordIndex ===
            words.length
        ) {

            wordIndex = 0;

        }

        speed = 500;

    }


    setTimeout(
        typeEffect,
        speed
    );

}

typeEffect();


// ================= ACTIVE NAVIGATION =================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".navbar a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >=
            sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// ================= SCROLL TO TOP =================

const scrollTop =
    document.getElementById("scroll-top");


window.addEventListener("scroll", () => {

    if (
        window.scrollY > 500
    ) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});


scrollTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById(
        "contact-form"
    );

const formMessage =
    document.getElementById(
        "form-message"
    );


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        formMessage.textContent =
            "Thank you! Your message has been received.";

        contactForm.reset();

        setTimeout(() => {

            formMessage.textContent = "";

        }, 5000);

    }
);