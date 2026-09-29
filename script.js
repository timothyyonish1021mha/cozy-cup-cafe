// Cozy Cup Café - simple, beginner-friendly JavaScript.

// Event handler #1: show or hide the Daily Specials.
const specialsButton = document.getElementById("specialsButton");
const specialsList = document.getElementById("specialsList");

specialsButton.addEventListener("click", function () {
  specialsList.classList.toggle("hidden");

  if (specialsList.classList.contains("hidden")) {
    specialsButton.textContent = "Show Daily Specials";
    specialsButton.setAttribute("aria-expanded", "false");
  } else {
    specialsButton.textContent = "Hide Daily Specials";
    specialsButton.setAttribute("aria-expanded", "true");
  }
});

// Event handler #2: submit the form without refreshing the page.
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formMessage.textContent = "Thanks for reaching out! Cozy Cup Café will get back to you soon.";
  contactForm.reset();
});
