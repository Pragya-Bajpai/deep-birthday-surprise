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

/* ===== SPECIAL ROMANTIC PHOTO LIGHTBOX ===== */

document.addEventListener("DOMContentLoaded", function () {

    const gallery = document.getElementById("photoGrid");
    if (!gallery) return;

    const messages = [
        "Every moment with you feels like <em>a beautiful dream.</em> ❤️",
        "If I had to choose again, <em>I'd still choose you.</em> 💗",
        "You are my favourite part of <em>every beautiful memory.</em>",
        "My heart has found its home <em>in you, Jaan.</em> 🥹",
        "A thousand memories, but <em>you are my favourite.</em>",
        "I wish I could pause time <em>whenever I'm with you.</em> ♾️",
        "You make my ordinary world <em>extraordinary.</em> ✨",
        "No matter how many pictures we take, <em>I'll never get enough of us.</em> ❤️",
        "My favourite place will always be <em>next to you.</em>",
        "You are the reason behind <em>so many of my smiles.</em> 💕"
    ];

    const lightbox = document.createElement("div");
    lightbox.className = "love-lightbox";

    lightbox.innerHTML = `
        <div class="love-lightbox-content">
            <button class="love-close" aria-label="Close">&times;</button>

            <div class="love-photo-frame">
                <img src="" alt="Our special memory">
            </div>

            <p class="love-caption-small">A little piece of my heart</p>

            <p class="love-special-message"></p>

            <button class="love-heart-button" aria-label="Send love">
                ♥
            </button>
        </div>
    `;

    document.body.appendChild(lightbox);

    const popupImage = lightbox.querySelector(".love-photo-frame img");
    const popupMessage = lightbox.querySelector(".love-special-message");
    const closeButton = lightbox.querySelector(".love-close");
    const heartButton = lightbox.querySelector(".love-heart-button");

    function createHeart(x, y) {

        const heart = document.createElement("span");
        heart.className = "love-floating-heart";
        heart.textContent = ["♥", "♡", "💗", "❤"][Math.floor(Math.random() * 4)];

        heart.style.left = x + "px";
        heart.style.top = y + "px";

        heart.style.setProperty("--fly-x", (Math.random() * 240 - 120) + "px");
        heart.style.setProperty("--fly-y", (-100 - Math.random() * 220) + "px");

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2300);
    }

    function heartExplosion() {

        const rect = heartButton.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 24; i++) {
            createHeart(centerX, centerY);
        }

        heartButton.style.transform = "scale(1.3)";

        setTimeout(() => {
            heartButton.style.transform = "";
        }, 250);
    }

    function createSparkles() {

        for (let i = 0; i < 16; i++) {

            const sparkle = document.createElement("span");
            sparkle.className = "love-sparkle";
            sparkle.textContent = "✦";

            sparkle.style.left = Math.random() * window.innerWidth + "px";
            sparkle.style.top = Math.random() * window.innerHeight + "px";

            document.body.appendChild(sparkle);

            setTimeout(() => sparkle.remove(), 1600);
        }
    }

    function openPhoto(image) {

        popupImage.src = image.src;
        popupImage.alt = image.alt || "Our special memory";

        const randomMessage = messages[
            Math.floor(Math.random() * messages.length)
        ];

        popupMessage.innerHTML = randomMessage;

        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";

        createSparkles();

        setTimeout(() => {
            const rect = lightbox.getBoundingClientRect();

            for (let i = 0; i < 12; i++) {
                createHeart(
                    Math.random() * window.innerWidth,
                    rect.height * (0.2 + Math.random() * 0.6)
                );
            }
        }, 200);
    }

    function closePhoto() {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
    }

    gallery.addEventListener("click", function (event) {

        const image = event.target.closest(".photo-card img");

        if (!image) return;

        openPhoto(image);
    });

    closeButton.addEventListener("click", closePhoto);

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closePhoto();
        }
    });

    heartButton.addEventListener("click", heartExplosion);

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closePhoto();
        }
    });

});

/* ===== FULL SCREEN ROSES + HEART BURST ===== */

document.addEventListener("DOMContentLoaded", function () {

    const envelope = document.getElementById("envelope");
    const letterReveal = document.getElementById("letterReveal");
    const closeLetter = document.getElementById("closeLetter");

    if (!envelope || !letterReveal) return;

    let flowerInterval = null;

    // Create floating rose, petals and hearts
    function createFloatingFlower() {

        const item = document.createElement("span");
        item.className = "letter-floating-item";

        const decorations = [
            "🌹", "🌹", "🌹",
            "❤️", "💗", "💕", "💖",
            "🌺", "🥀", "🌸", "♥"
        ];

        item.textContent =
            decorations[Math.floor(Math.random() * decorations.length)];

        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight + 40;

        const endX = startX + (Math.random() * 220 - 110);
        const endY = -100 - Math.random() * 200;

        item.style.setProperty("--start-x", startX + "px");
        item.style.setProperty("--start-y", startY + "px");
        item.style.setProperty("--end-x", endX + "px");
        item.style.setProperty("--end-y", endY + "px");
        item.style.setProperty("--duration", (4 + Math.random() * 4) + "s");
        item.style.setProperty(
            "--rotation",
            (Math.random() * 360 - 180) + "deg"
        );

        item.style.fontSize = (18 + Math.random() * 25) + "px";

        document.body.appendChild(item);

        setTimeout(() => item.remove(), 8500);
    }

    // Heart explosion from envelope
    function createHeartBurst() {

        const rect = envelope.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 45; i++) {

            const heart = document.createElement("span");
            heart.className = "letter-heart-burst";

            heart.textContent = ["❤️", "💗", "💕", "♥", "💖"][
                Math.floor(Math.random() * 5)
            ];

            const angle = Math.random() * Math.PI * 2;
            const distance = 100 + Math.random() * 260;

            heart.style.left = centerX + "px";
            heart.style.top = centerY + "px";

            heart.style.setProperty(
                "--burst-x",
                Math.cos(angle) * distance + "px"
            );

            heart.style.setProperty(
                "--burst-y",
                Math.sin(angle) * distance + "px"
            );

            heart.style.animationDelay = Math.random() * 0.35 + "s";

            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 2300);
        }
    }

    function startRomanticEffects() {
      if (flowerInterval) return;

      document.body.classList.add("letter-open");

      // Initial shower of roses and hearts
      for (let i = 0; i < 35; i++) {
        setTimeout(createFloatingFlower, i * 90);
      }

      // Continuous floating flowers
      flowerInterval = setInterval(() => {
        createFloatingFlower();
        createFloatingFlower();
      }, 450);
      // Automatically stop effects after 20 seconds
      setTimeout(() => {
        stopRomanticEffects();
      }, 20000);
    }

    function stopRomanticEffects() {

        clearInterval(flowerInterval);
        flowerInterval = null;

        document.body.classList.remove("letter-open");

        document.querySelectorAll(
            ".letter-floating-item, .letter-heart-burst"
        ).forEach(item => item.remove());
    }

    // Start effects when envelope opens
    envelope.addEventListener("click", function () {

        setTimeout(() => {

            if (
                envelope.classList.contains("open") &&
                letterReveal.classList.contains("show")
            ) {
                createHeartBurst();
                startRomanticEffects();
            }

        }, 150);
    });

    // Stop effects when letter closes
    if (closeLetter) {
        closeLetter.addEventListener("click", stopRomanticEffects);
    }

});
