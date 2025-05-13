function changeContent() {
  document.getElementById("info").textContent = "Dogs are loyal companions!";
}

function changeStyle() {
  document.body.style.backgroundColor = "#f0f8ff"; // Light blue
  document.getElementById("main-title").style.color = "#2e7d32"; // Green
}

function toggleElement() {
  const existing = document.getElementById("extra");

  if (existing) {
    existing.remove(); // Remove element
  } else {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Fun Fact: Some cats can swim!";
    newParagraph.id = "extra";
    document.querySelector("main").appendChild(newParagraph); // Add element
  }
}
