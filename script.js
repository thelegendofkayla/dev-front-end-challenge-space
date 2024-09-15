document.addEventListener("DOMContentLoaded", () => {
  // ----- LIFT OFF BUTTON -----
  const createLiftOffButton = () => {
    const liftOffBtn = document.createElement("button");
    liftOffBtn.textContent = "Begin Exploration";
    liftOffBtn.classList.add("lift-off-btn");

    const header = document.querySelector("header");
    if (header) {
      header.appendChild(liftOffBtn);
    }

    liftOffBtn.addEventListener("click", () => {
      const aboutSection = document.querySelector(".solar-system-overview");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  createLiftOffButton();

  // ----- CAROUSEL -----
  const createCarousel = (contentSelector, sectionSelector) => {
    const items = document.querySelectorAll(contentSelector);
    let index = 0;

    const section = document.querySelector(sectionSelector);
    const nextBtn = document.createElement("button");
    const prevBtn = document.createElement("button");

    nextBtn.textContent = "Next";
    prevBtn.textContent = "Previous";

    nextBtn.classList.add("card-btn");
    prevBtn.classList.add("card-btn");

    const carouselContainer = document.createElement("div");
    carouselContainer.classList.add("carousel");

    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("carousel-content");

    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("carousel-buttons");

    section.appendChild(carouselContainer);

    carouselContainer.appendChild(contentWrapper);
    carouselContainer.appendChild(buttonWrapper);
    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);

    const updateContent = (i) => {
      contentWrapper.innerHTML = "";

      if (items[i]) {
        const currentItem = items[i].cloneNode(true);
        currentItem.classList.add("active");
        contentWrapper.appendChild(currentItem);
      }
    };

    updateContent(index);

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % items.length;
      updateContent(index);
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + items.length) % items.length;
      updateContent(index);
    });
  };

  createCarousel(".planet", ".planets");
  createCarousel(".moon", ".moons");
  createCarousel(".object", ".solar-system-objects");

  // ----- LIGHT/DARK MODE TOGGLE -----
  const themeToggleBtn = document.createElement("button");
  const updateButtonText = () => {
    if (document.body.classList.contains("dark-mode")) {
      themeToggleBtn.textContent = "Toggle Light Mode";
    } else {
      themeToggleBtn.textContent = "Toggle Dark Mode";
    }
  };

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark-mode") {
    document.body.classList.add("dark-mode");
  }

  updateButtonText();

  themeToggleBtn.classList.add("toggle-theme");
  const header = document.querySelector(".header");
  if (header) {
    header.appendChild(themeToggleBtn);
  }

  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    updateButtonText();

    const theme = document.body.classList.contains("dark-mode")
      ? "dark-mode"
      : "light-mode";
    localStorage.setItem("theme", theme);
  });


  // ----- ADD HEADER ICON -----
    const icon = document.createElement("img");
    icon.src = "assets/space-icon.png";
    icon.classList.add("header-icon");
    header.appendChild(icon);
  
});
