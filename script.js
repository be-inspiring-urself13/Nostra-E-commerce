// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Closing offer section
    const closebutton = document.querySelector(".close__button");
    const offersection = document.getElementById("offer");

    closebutton.addEventListener("click", function() {
        offersection.style.display = "none";
    });

    // Select elements for slider functionality
    const sliderLeftButton = document.getElementById("slider-left-activate");
    const sliderRightButton = document.getElementById("slider-right-activate");
    const sliderImageContainer = document.querySelector(".slider-image-container");

    let slideIndex = 0;
    const maxSlides = document.querySelectorAll('.slider-image').length - 1; // Total number of images

    // Right button click event
    sliderRightButton.addEventListener("click", function() {
        slideIndex = (slideIndex + 1) > maxSlides ? 0 : slideIndex + 1;
        sliderImageContainer.style.transform = `translateX(-${slideIndex * 100}vw)`;
    });

    // Left button click event
    sliderLeftButton.addEventListener("click", function() {
        slideIndex = (slideIndex - 1) < 0 ? maxSlides : slideIndex - 1;
        sliderImageContainer.style.transform = `translateX(-${slideIndex * 100}vw)`;
    });
});


// JavaScript Code to toggle heart color on click
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('liked')) {
            this.src = './images/black_heart.png';
            this.classList.remove('liked');
        } else {
            this.src = './images/red_heart.png';
            this.classList.add('liked');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the "New Arrival" link and the New Arrivals section by ID
    const newArrivalLink = document.getElementById("new-arrival-link");
    const newArrivalsSection = document.getElementById("new-arrivals");

    // Check if the elements are successfully selected
    if (newArrivalLink && newArrivalsSection) {
        // Add a click event listener to the "New Arrival" link
        newArrivalLink.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent the default anchor behavior

            // Scroll to the New Arrivals section smoothly
            newArrivalsSection.scrollIntoView({
                behavior: "smooth", // Smooth scroll
                block: "start"      // Align the section at the top of the viewport
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the "New Arrival" link and the New Arrivals section by ID
    const newArrivalLink = document.getElementById("must-wanted-link");
    const newArrivalsSection = document.getElementById("most-wanted");

    // Check if the elements are successfully selected
    if (newArrivalLink && newArrivalsSection) {
        // Add a click event listener to the "New Arrival" link
        newArrivalLink.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent the default anchor behavior

            // Scroll to the New Arrivals section smoothly
            newArrivalsSection.scrollIntoView({
                behavior: "smooth", // Smooth scroll
                block: "start"      // Align the section at the top of the viewport
            });
        });
    }
});

document.getElementById('side-navbar-activate').addEventListener('click', function () {
    document.getElementById('side-nav').style.width = '250px';
});

document.getElementById('side-navbar-close').addEventListener('click', function () {
    document.getElementById('side-nav').style.width = '0';
});