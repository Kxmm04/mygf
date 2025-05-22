function goBack() {
    window.history.back(); // หรือ window.location.href = "index.html";
  }
  
  const audio = document.getElementById("audio");
  const disc = document.querySelector(".disc");
  
  audio.addEventListener("play", () => {
    disc.style.animationPlayState = "running";
  });
  
  audio.addEventListener("pause", () => {
    disc.style.animationPlayState = "paused";
  });
  