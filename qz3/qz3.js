window.addEventListener("keydown", function(event) {
    const p = document.createElement("p");
    p.textContent = `${event.key}`
    document.getElementById("output").appendChild(p);
  }, true);
