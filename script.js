window.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const clapperImg = document.getElementById("clapperImg");
  const rec = document.getElementById("recMark");
  const intro = document.getElementById("intro");
  const content = document.getElementById("mainContent");
  const clapSound = document.getElementById("clapSound");

  startBtn.addEventListener("click", () => {
    clapperImg.src = "16775.png";
    clapSound.play();
    startBtn.style.display = "none";
    rec.style.display = "block";
    rec.style.opacity = 1;

    setTimeout(() => {
      rec.style.opacity = 0;
      setTimeout(() => {
        rec.style.display = "none";
      }, 1000); // フェードアウトが終わってから非表示
    }, 2000);


    setTimeout(() => {
      document.body.style.backgroundColor = "#FFE4C4";
      document.body.style.color = "black";
    }, 2000);

    setTimeout(() => {
      rec.style.display = "none";
      intro.style.display = "none";
      content.classList.remove("hidden");
      content.style.opacity = 1;

      // ← 本文表示後にフェードイン監視を開始
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });

      document.querySelectorAll(".contentOverlay").forEach(el => {
        observer.observe(el);
      });
    }, 2000);
  });
});
