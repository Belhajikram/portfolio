function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-menu .hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.addEventListener("scroll", function () {
  var scrollButton = document.querySelector(".scroll-to-top");
  if (window.scrollY > 300) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (form) { 
      form.addEventListener('submit', function(event) {
          event.preventDefault(); 
          
          const formData = new FormData(form);
          for (const [name, value] of formData.entries()) {
              console.log(`${name}: ${value}`);
          }
          form.reset();
      });
  } else {
      console.error('Form element not found.'); 
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (form) {
      form.addEventListener('submit', function(event) {
          event.preventDefault(); 

          const formData = new FormData(form);
          if (Notification.permission === 'granted') {
              new Notification('Form submitted successfully!');
          } else if (Notification.permission !== 'denied') {
              Notification.requestPermission().then(function(permission) {
                  if (permission === 'granted') {
                      new Notification('Form submitted successfully!');
                  }
              });
          }
          form.reset();
      });
  } else {
      console.error('Contact form element not found.');
  }
});

const highlightedText = document.getElementById('highlighted-text');

highlightedText.addEventListener('mouseenter', () => {
  highlightedText.style.animation = 'none';
  highlightedText.offsetHeight; /* Trigger reflow */
  highlightedText.style.animation = 'typing 5s steps(40) forwards';
});
