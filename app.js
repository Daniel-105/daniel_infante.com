// declaring the buttons
const programmingBtn = document.querySelector(".programming-button");
const othersBtn = document.querySelector(".others-button");
const toolsBtn = document.querySelector(".tools-button");
const idiomsBtn = document.querySelector(".idioms-button");

// declaring the containers
const programmingContainer = document.querySelector(
  ".programming-skills-container"
);
const othersContainer = document.querySelector(".others-skills-container");
const toolsContainer = document.querySelector(".tools-skills-container");
const idiomsContainer = document.querySelector(".idioms-skills-container");

// Adding the eventListener to the buttons
programmingBtn.addEventListener("click", () => {
  // Making the programming container to appear and the others disapear
  programmingContainer.style.display = "flex";
  othersContainer.style.display = "none";
  toolsContainer.style.display = "none";
  idiomsContainer.style.display = "none";

  // Making the color of the buttons correspond to the container displayed
  programmingBtn.style.backgroundColor = "var(--green)";
  othersBtn.style.backgroundColor = "var(--blue)";
  toolsBtn.style.backgroundColor = "var(--blue)";
  idiomsBtn.style.backgroundColor = "var(--blue)";

  // Making the font-weight of the buttons correspond to the container displayed bold
  programmingBtn.style.fontWeight = "700";
  othersBtn.style.fontWeight = "400";
  toolsBtn.style.fontWeight = "400";
  idiomsBtn.style.fontWeight = "400";
});

othersBtn.addEventListener("click", () => {
  programmingContainer.style.display = "none";
  othersContainer.style.display = "flex";
  toolsContainer.style.display = "none";
  idiomsContainer.style.display = "none";

  programmingBtn.style.backgroundColor = "var(--blue)";
  othersBtn.style.backgroundColor = "var(--green)";
  toolsBtn.style.backgroundColor = "var(--blue)";
  idiomsBtn.style.backgroundColor = "var(--blue)";

  programmingBtn.style.fontWeight = "400";
  othersBtn.style.fontWeight = "700";
  toolsBtn.style.fontWeight = "400";
  idiomsBtn.style.fontWeight = "400";
});

toolsBtn.addEventListener("click", () => {
  programmingContainer.style.display = "none";
  othersContainer.style.display = "none";
  toolsContainer.style.display = "flex";
  idiomsContainer.style.display = "none";

  programmingBtn.style.backgroundColor = "var(--blue)";
  othersBtn.style.backgroundColor = "var(--blue)";
  toolsBtn.style.backgroundColor = "var(--green)";
  idiomsBtn.style.backgroundColor = "var(--blue)";

  programmingBtn.style.fontWeight = "400";
  othersBtn.style.fontWeight = "400";
  toolsBtn.style.fontWeight = "700";
  idiomsBtn.style.fontWeight = "400";
});

idiomsBtn.addEventListener("click", () => {
  programmingContainer.style.display = "none";
  othersContainer.style.display = "none";
  toolsContainer.style.display = "none";
  idiomsContainer.style.display = "flex";

  programmingBtn.style.backgroundColor = "var(--blue)";
  othersBtn.style.backgroundColor = "var(--blue)";
  toolsBtn.style.backgroundColor = "var(--blue)";
  idiomsBtn.style.backgroundColor = "var(--green)";

  programmingBtn.style.fontWeight = "400";
  othersBtn.style.fontWeight = "400";
  toolsBtn.style.fontWeight = "400";
  idiomsBtn.style.fontWeight = "700";
});
