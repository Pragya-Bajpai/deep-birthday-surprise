document.addEventListener("DOMContentLoaded", () => {
  // ==============================
  // LOVE LETTER / ENVELOPE
  // ==============================

  const envelope = document.getElementById("envelope");
  const letterReveal = document.getElementById("letterReveal");
  const closeLetter = document.getElementById("closeLetter");

  if (envelope && letterReveal) {
    envelope.addEventListener("click", () => {
      const open = envelope.classList.toggle("open");

      envelope.setAttribute("aria-expanded", String(open));
      letterReveal.classList.toggle("show", open);
      letterReveal.setAttribute("aria-hidden", String(!open));

      if (open) {
        setTimeout(() => {
          letterReveal.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 250);
      }
    });

    if (closeLetter) {
      closeLetter.addEventListener("click", () => {
        envelope.classList.remove("open");
        envelope.setAttribute("aria-expanded", "false");

        letterReveal.classList.remove("show");
        letterReveal.setAttribute("aria-hidden", "true");
      });
    }
  }

  // ==============================
  // PERMANENT PHOTO GALLERY
  // No upload input required
  // ==============================

  const photoGrid = document.getElementById("photoGrid");

  if (photoGrid) {
    const galleryImages = photoGrid.querySelectorAll("img");

    galleryImages.forEach((img) => {
      img.addEventListener("error", () => {
        console.warn("Photo not found:", img.src);
      });
    });
  }

  // ==============================
  // CELEBRATION EFFECTS
  // ==============================

  const colours = [
    "#f18eaa",
    "#f5c56b",
    "#b6a4e8",
    "#a4d8cf",
    "#f5a17e",
    "#f5dce2",
  ];

  function celebration() {
    // Balloons
    for (let i = 0; i < 22; i++) {
      setTimeout(() => {
        const b = document.createElement("div");

        b.className = "balloon";

        b.style.left = Math.random() * 96 + "vw";

        b.style.background =
          colours[Math.floor(Math.random() * colours.length)];

        b.style.animationDuration = 4.8 + Math.random() * 2.5 + "s";

        document.body.appendChild(b);

        setTimeout(() => b.remove(), 8000);
      }, i * 90);
    }

    // Confetti
    for (let i = 0; i < 130; i++) {
      const c = document.createElement("i");

      c.className = "confetti";

      c.style.left = Math.random() * 100 + "vw";

      c.style.background = colours[Math.floor(Math.random() * colours.length)];

      c.style.animationDelay = Math.random() * 1.2 + "s";

      c.style.animationDuration = 2.5 + Math.random() * 2 + "s";

      document.body.appendChild(c);

      setTimeout(() => c.remove(), 6000);
    }
  }

  // ==============================
  // BIRTHDAY CAKE
  // ==============================

  let cakeDone = false;

  const cake = document.getElementById("cake");
  const cakeMessage = document.getElementById("cakeMessage");
  const cutCake = document.getElementById("cutCake");

  function cutCakeFunction() {
    if (cakeDone) return;

    cakeDone = true;

    if (cake) {
      cake.classList.add("cut");
    }

    if (cakeMessage) {
      cakeMessage.textContent =
        "Yayyy, cake cut ho gaya! Happy Birthday, Deep! May every dream of yours come true, Jaan. ❤️";
    }

    if (cutCake) {
      cutCake.textContent = "A wish just came true ♥";
    }

    celebration();
  }

  if (cake) {
    cake.addEventListener("click", cutCakeFunction);

    cake.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        cutCakeFunction();
      }
    });
  }

  if (cutCake) {
    cutCake.addEventListener("click", cutCakeFunction);
  }

  // ==============================
  // BIGGEST HUG
  // ==============================

  const hugButton = document.getElementById("hugButton");
  const hugMessage = document.getElementById("hugMessage");

  if (hugButton) {
    hugButton.addEventListener("click", () => {
      if (hugMessage) {
        hugMessage.textContent =
          "A tighttt hug for you, Deep! I wish I could give you this hug in person. 🤗❤️";
      }

      for (let i = 0; i < 18; i++) {
        const h = document.createElement("span");

        h.className = "heart-float";

        h.textContent = ["♥", "♡", "💗", "💕"][Math.floor(Math.random() * 4)];

        h.style.left = Math.random() * 100 + "vw";

        h.style.fontSize = 18 + Math.random() * 25 + "px";

        document.body.appendChild(h);

        setTimeout(() => h.remove(), 7500);
      }
    });
  }

  // ==============================
  // FLOATING HEARTS
  // ==============================

  setInterval(() => {
    const h = document.createElement("span");

    h.className = "heart-float";

    h.textContent = Math.random() > 0.5 ? "♡" : "♥";

    h.style.left = Math.random() * 100 + "vw";

    h.style.fontSize = 12 + Math.random() * 13 + "px";

    h.style.opacity = ".28";

    document.body.appendChild(h);

    setTimeout(() => h.remove(), 7500);
  }, 1700);
});
