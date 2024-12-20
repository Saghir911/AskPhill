/* Menu Animation */
const menu = document.querySelector(".menu");
const icon = menu.querySelector(".icon");
const menuText = menu.querySelector(".menu-text");

// Menu open timeline
let tl = gsap.timeline({ paused: true });
tl.to(
  menuText,
  {
    x: 20,
    opacity: 0,
    duration: 0.1,
    ease: "power2.inOut",
  },
  0
)
  .to(
    icon,
    {
      x: 90,
      rotation: 90,
      duration: 0.5,
      ease: "elastic.out(.5, 0.5)",
    },
    0
  )
  .to(
    menu,
    {
      width: "280px",
      duration: 0.6,
      ease: "back.out(1.7)",
    },
    0
  );

// Menu close timeline
let reverseTl = gsap.timeline({ paused: true });
reverseTl
  .to(
    menuText,
    {
      x: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power2.inOut",
    },
    0
  )
  .to(
    icon,
    {
      x: 0,
      rotation: 0,
      duration: 0.5,
      ease: "elastic.out(.5, 0.5)",
    },
    0
  )
  .to(
    menu,
    {
      width: "250px",
      duration: 0.6,
      ease: "back.out(1.7)",
    },
    0
  );

// Menu hover events
menu.addEventListener("mouseenter", () => {
  reverseTl.pause();
  tl.restart();
});

menu.addEventListener("mouseleave", () => {
  tl.pause();
  reverseTl.restart();
});

// Parallax movement animation
let second_page = document.querySelector(".second-page");
let movingBackward = document.querySelectorAll(".backward");
let movingForward = document.querySelector(".forward");

second_page.addEventListener("mousemove", (dets) => {
  let x = dets.clientX;
  let y = dets.clientY;

  movingBackward.forEach((elem) => {
    gsap.to(elem, {
      x: -x * 0.05,
      y: -y * 0.05,
      duration: 0.3,
      ease: "power1.out",
    });
  });

  gsap.to(movingForward, {
    x: x * 0.05,
    y: y * 0.05,
    duration: 0.3,
    ease: "power1.out",
  });
});

// Scroll animations for upper elements
gsap.from(".converstion-rate, .brand-moved", {
  scrollTrigger: {
    trigger: ".second-page",
    start: "top 60%",
    toggleActions: "play none none reverse",
  },
  scale: 0,
  opacity: 0,
  y: 30,
  duration: 0.5,
  stagger: 0.05,
  ease: "back.out(2)",
});

// Scroll animations for lower elements
gsap.from(".beyond-headless, .brand-stories", {
  scrollTrigger: {
    trigger: ".beyond-headless",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  scale: 0,
  opacity: 0,
  y: 30,
  duration: 0.5,
  stagger: 0.05,
  ease: "back.out(2)",
});
const accordionItems = document.querySelectorAll(".accordion .accordion-item");

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active class from all items
    accordionItems.forEach((i) => {
      i.classList.remove("active");
      i.classList.remove("expanded");
    });

    // Add active and expanded classes to clicked item
    item.classList.add("active");
    item.classList.add("expanded");
    // Animate the accordion item with bounce effect
    let tl = gsap.timeline();
    gsap.from(item, {
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
      y: -5,
    });
    // Animate h3 first with a popup effect
    gsap.from(item.querySelector("h3"), {
      opacity: 0,
      scale: 0,
      duration: 0.4,
      ease: "back.out(1.7)",
    });

    // Animate paragraph with delay
    gsap.from(item.querySelector("p"), {
      opacity: 0,
      y: 20,
      duration: 0.3,
      delay: 0.2, // Delay the paragraph animation
      ease: "power2.out",
    });

    // Animate button last
    gsap.from(item.querySelector("button"), {
      opacity: 0,
      y: 10,
      duration: 0.3,
       ease: "power2.out",
    });
  });
});
