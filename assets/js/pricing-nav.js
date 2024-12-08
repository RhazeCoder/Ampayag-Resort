const rrBtn = document.getElementById("room-rate-nav");
const spBtn = document.getElementById("special-package-nav");
const dpBtn = document.getElementById("day-pass-nav");

const rrContainer = document.getElementById("per-night");
const spContainer = document.getElementById("special-packages");
const dpContainer = document.getElementById("day-pass");

let active = "2";

function setActiveButton() {
  [rrBtn, spBtn, dpBtn].forEach(btn => {
    btn.style.color = "";
    btn.style.textDecoration = "none";
    btn.style.cursor = "pointer";
  });

  if (active === "1") {
    rrBtn.style.color = "#FED136";
    rrBtn.style.textDecoration = "underline";
  } else if (active === "2") {
    spBtn.style.color = "#FED136";
    spBtn.style.textDecoration = "underline";
  } else if (active === "3") {
    dpBtn.style.color = "#FED136";
    dpBtn.style.textDecoration = "underline";
  }

  hideContainers();
}

function hideContainers() {
  rrContainer.style.display = "none";
  spContainer.style.display = "none";
  dpContainer.style.display = "none";

  if (active === "1") {
    rrContainer.style.display = "block";
  } else if (active === "2") {
    spContainer.style.display = "block";
  } else if (active === "3") {
    dpContainer.style.display = "block";
  }
}

rrBtn.addEventListener("click", () => {
  active = "1";
  setActiveButton();
});

spBtn.addEventListener("click", () => {
  active = "2";
  setActiveButton();
});

dpBtn.addEventListener("click", () => {
  active = "3";
  setActiveButton();
});

setActiveButton();
