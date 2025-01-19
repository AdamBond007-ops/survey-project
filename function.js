// Step tracking for sequential content
let step = 0;

function nextStep() {
  const popupText = document.getElementById("popup-text");
  const popup = document.getElementById("popup");
  const mainContent = document.getElementById("main-content");

  if (step === 0) {
    popupText.innerHTML = "I need to tell you something important...";
    step++;
  } else if (step === 1) {
    popupText.innerHTML = "Just wait a second...";
    step++;
  } else {
    popup.style.animation = "fadeOut 1s ease";
    setTimeout(() => {
      popup.classList.add("hidden");
      mainContent.classList.remove("hidden");
    }, 1000); // Wait for fade-out animation to finish
  }
}

function sayYes() {
  const result = document.getElementById("result");
  result.innerHTML = "Yay! I'm so happy 😍. Let's make this official!";
  result.style.color = "#4caf50";
  result.classList.remove("hidden");
}

function sayNo() {
  const result = document.getElementById("result");
  result.innerHTML = "That's okay 😔. Thank you for being honest.";
  result.style.color = "#f44336";
  result.classList.remove("hidden");
}
