// Buttons
document.addEventListener("DOMContentLoaded", () => {
    const detailButtons = document.querySelectorAll(".button-details");

    detailButtons.forEach(button => {
      button.addEventListener("click", () => {
        const details = button.nextElementSibling;
  
        if (details.style.display === "none") {
          details.style.display = "block";
          button.textContent = "Hide Details";
        } else {
          details.style.display = "none";
          button.textContent = "Show Details";
        }
      });
    });
  });

    // Contact Form
    const contactForm = document.querySelector("#contact form");

    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("content").value.trim();
  
      if (!name || !email || !message) {
          alert("Please fill out all fields.");
          return;
      }
  
      alert("Thank you, " + name + "! Your message has been sent successfully.");
  
      contactForm.reset();
  });

  // Geolocation
  const locationButton = document.getElementById("get-location-btn");

  locationButton.addEventListener("click", getLocation);

  
  function getLocation() {
  const locationElement = document.getElementById("location");

  if (navigator.geolocation) {
      locationElement.innerHTML = "Getting location...";

      navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
      locationElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

  function showPosition(position) {
  const locationElement = document.getElementById("location");

  locationElement.innerHTML = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`;
}

function showError(error) {
  const locationElement = document.getElementById("location");

  switch (error.code) {
      case error.PERMISSION_DENIED:
          locationElement.innerHTML = "User denied the request for Geolocation.";
          break;
      case error.POSITION_UNAVAILABLE:
          locationElement.innerHTML = "Location information is unavailable.";
          break;
      case error.TIMEOUT:
          locationElement.innerHTML = "The request to get user location timed out.";
          break;
      case error.UNKNOWN_ERROR:
          locationElement.innerHTML = "An unknown error occurred.";
          break;
  }
}

const toggleThemeButton = document.getElementById('toggleTheme');
toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        projects.forEach(project => {
            if (project.getAttribute('data-category') === category || category === 'all') {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});


const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-image');

let currentIndex = 0;
const totalSlides = carouselImages.length;

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
};

const prevSlide = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
};

const updateCarousel = () => {
    carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

setInterval(nextSlide, 3000);
