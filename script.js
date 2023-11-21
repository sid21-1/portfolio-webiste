// LOADER
let loader = document.querySelector("#loader");
let hidden = document.querySelector(".hidden");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s";

    setTimeout(() => {
      loader.style.display = "none";
      hidden.classList.remove("hidden");
    }, 500);
  }, 1500);
});

// Confetti-Container
document.addEventListener("DOMContentLoaded", function () {
  const confettiContainer = document.querySelector(".confetti-container");
  const maxParticles = 50;
  let isCreatingParticles = true;

  for (let i = 0; i < maxParticles; i++) {
    createConfetti();
  }

  function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 4 + 2}s`;

    confettiContainer.appendChild(confetti);

    confetti.addEventListener("animationiteration", () => {
      if (isCreatingParticles) {
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 4 + 2}s`;
      }
    });
  }

  // Set a flag to stop creating particles after the initial set.
  setTimeout(() => {
    isCreatingParticles = false;
  }, 2000); // Adjust the timing based on your animation duration
});
