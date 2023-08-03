const images = [
    {
      src: "/Images/Staff O Da Month.jpg",
      href: "https://forms.gle/q2UwmC4xsVkSQnzk9",
    },
    {
      src: "/Images/Chat Leaderboard.jpg",
      href: "https://piggy.gg/leaderboard/1086919672433225738",
    },
    {
      src: "/Images/Apply.jpg",
      href: "https://docs.google.com/presentation/d/1XGHLfixeeeq9NP8jHdirGdzfm4fq0aui0Hh9ZY8m4b0/edit?usp=sharing", 
      
    },
  ];
  
  const slider = document.querySelector(".slider");
  
  for (let i = 0; i < 3; i++) {
    const img = document.createElement("img");
  
    img.src = images[i].src;
    img.id = `slide-${i}`;
    img.style.maxHeight = "500px";
    img.setAttribute("href", images[i].href);
    slider.appendChild(img);
  }
  
  var currentSlide = 0;

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= images.length) {
      currentSlide = 0;
    }
    updateSlide();
  }
  
  const prevSlide = () => {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = images.length - 1;
    }
    updateSlide();
  };
  
  function updateSlide() {
    slider.querySelectorAll("img").forEach((img) => {
      img.style.display = "none";
    });
    slider.querySelectorAll(`#slide-${currentSlide}`).forEach((img) => {
      img.style.display = "block";
    });
  }
  
  document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    }
  });
  
  const clickableSlides = document.querySelectorAll(".slider img");

clickableSlides.forEach((img) => {
  img.addEventListener("click", () => {
    window.open(img.getAttribute("href"), "_blank"); // Open link in a new tab
  });
});
