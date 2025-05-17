//window.alert('Nice to see you here!');

function spawnComputer() {
  const comp = document.createElement("div");
  comp.classList.add("computer");

  const left = Math.random() * 80;
  const bottom = Math.random() * 20;
  comp.style.left = `${left}vw`;
  comp.style.bottom = `${bottom}vh`;
  comp.style.animationDelay = `${Math.random() * 3}s`;

  document.body.appendChild(comp);
}

for (let i = 0; i < 5; i++) {
  spawnComputer();
}
