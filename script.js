window.addEventListener("DOMContentLoaded",() => {

  const startBtn = document.getElementById("startBtn");
  const clapperImg = document.getElementById("clapperImg");
  const rec = document.getElementById("recMark");
  const intro = document.getElementById("intro");
  const content = document.getElementById("mainContent");
  const clapSound = document.getElementById("clapSound");
  const overlay = document.getElementById("overlayTitle");
  const floatBtn = document.getElementById("floatingContactBtn");
  const contactSec = document.getElementById("contactSection");

  startBtn.addEventListener("click", () => {
    clapperImg.src = "16775.png";
    clapSound.play();
    startBtn.style.display = "none";
    rec.classList.remove("hidden");

    setTimeout(() => {
      rec.classList.add("fade-out");
    }, 1500);

    setTimeout(() => {
      rec.classList.add("hidden");
      document.body.style.backgroundColor = "#FFE4C4";
      document.body.style.color = "black";
      overlay.classList.remove("hidden");
      intro.classList.add("hidden");
      content.classList.remove("hidden");
    }, 1500);
  });

  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add("fade-in");
    });
  },{threshold:0.2});
  document.querySelectorAll(".contentOverlay").forEach(el=>observer.observe(el));

  floatBtn.addEventListener("click",()=>{
    contactSec.classList.remove("hidden");
    setTimeout(()=>contactSec.scrollIntoView({behavior:"smooth"}),100);
  });
});
