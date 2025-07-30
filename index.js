const typingElement = document.querySelector(".typing-text");
const roles = [
  "Aspiring Software Developer",
  "Frontend Developer",
  "C++ Enthusiast",
  "ML Beginner",
  "Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];
  const currentText = currentRole.substring(0, charIndex);

  typingElement.textContent = currentText;

  if (!isDeleting && charIndex < currentRole.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(typeEffect, 1000);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
