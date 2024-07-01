console.log("Reference", "https://youtu.be/x6So8ZvCFus?si=zKXhRDxoUOrf1Pz-");

const d = document;
let nScale = 2;

d.addEventListener("click", (e) => {
  if (e.target.matches(".fold")) {
    nScale -= 0.25;
    e.target.style.setProperty("--v", nScale);
  }
});

d.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  if (e.target.matches(".fold")) {
    nScale += 0.25;
    e.target.style.setProperty("--v", nScale);
  }
});
