// ========================================
// ALI INSTITUTE - SCRIPT.JS
// ========================================


// ========================================
// 1. PRELOADER
// ========================================

window.addEventListener("load", function () {

    var preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.display = "none";
    }

});


// ========================================
// 2. MOBILE MENU
// ========================================

var menuBtn = document.getElementById("menuBtn");
var navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show");

    });

}


// ========================================
// 3. CLOSE MOBILE MENU
// ========================================

var menuLinks = document.querySelectorAll(".nav-links a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("show");
        }

    });

});


// ========================================
// 4. DARK MODE
// ========================================

var darkModeBtn = document.getElementById("darkMode");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("darkMode", "on");

        } else {

            localStorage.setItem("darkMode", "off");

        }

    });

}


// ========================================
// 5. LOAD DARK MODE
// ========================================

if (localStorage.getItem("darkMode") === "on") {

    document.body.classList.add("dark");

}


// ========================================
// 6. BACK TO TOP BUTTON
// ========================================

var backTop = document.getElementById("backTop");

if (backTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });


    backTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ========================================
// 7. CONTACT FORM
// ========================================

var contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you! Your message has been submitted successfully.");

        contactForm.reset();

    });

}


// ========================================
// 8. GALLERY LIGHTBOX
// ========================================

var galleryImages =
    document.querySelectorAll(".gallery-item img");


galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        var lightbox = document.createElement("div");


        // Lightbox design

        lightbox.style.position = "fixed";
        lightbox.style.top = "0";
        lightbox.style.left = "0";
        lightbox.style.width = "100%";
        lightbox.style.height = "100%";

        lightbox.style.background =
            "rgba(0, 0, 0, 0.90)";

        lightbox.style.display = "flex";
        lightbox.style.alignItems = "center";
        lightbox.style.justifyContent = "center";

        lightbox.style.zIndex = "9999";

        lightbox.style.cursor = "pointer";


        // Full image

        var fullImage =
            document.createElement("img");

        fullImage.src = image.src;

        fullImage.alt = image.alt;

        fullImage.style.maxWidth = "90%";

        fullImage.style.maxHeight = "90%";

        fullImage.style.borderRadius = "10px";


        // Add image

        lightbox.appendChild(fullImage);

        document.body.appendChild(lightbox);


        // Close lightbox

        lightbox.addEventListener("click", function () {

            lightbox.remove();

        });

    });

});


// ========================================
// 9. COUNTER ANIMATION
// ========================================

var counters =
    document.querySelectorAll(".counter");

var counterStarted = false;


function startCounters() {

    if (counterStarted) {
        return;
    }


    var stats =
        document.querySelector(".stats");


    if (!stats) {
        return;
    }


    var position =
        stats.getBoundingClientRect().top;


    if (position < window.innerHeight) {

        counterStarted = true;


        counters.forEach(function (counter) {

            var target =
                parseInt(
                    counter.getAttribute("data-target")
                );


            var number = 0;


            var timer =
                setInterval(function () {

                    number++;

                    counter.innerText = number;


                    if (number >= target) {

                        clearInterval(timer);

                        counter.innerText =
                            target + "+";

                    }

                }, 20);

        });

    }

}


window.addEventListener(
    "scroll",
    startCounters
);

startCounters();


// ========================================
// 10. ACTIVE NAVIGATION
// ========================================

window.addEventListener("scroll", function () {

    var sections =
        document.querySelectorAll("section[id]");


    var links =
        document.querySelectorAll(".nav-links a");


    var currentSection = "";


    sections.forEach(function (section) {

        var sectionTop =
            section.offsetTop - 150;


        var sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    links.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// ========================================
// 11. SMOOTH SCROLL
// ========================================

var smoothLinks =
    document.querySelectorAll('a[href^="#"]');


smoothLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        var targetId =
            this.getAttribute("href");


        if (
            targetId === "#" ||
            targetId === ""
        ) {

            return;

        }


        var target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();


            var header =
                document.querySelector(".header");


            var headerHeight =
                header
                    ? header.offsetHeight
                    : 0;


            var targetPosition =
                target.offsetTop -
                headerHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }

    });

});


// ========================================
// 12. WEBSITE MESSAGE
// ========================================

console.log(
    "Ali Institute Website JavaScript is Working!"
);
alert("JavaScript is working!");