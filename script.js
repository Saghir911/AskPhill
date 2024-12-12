// Select DOM elements for the menu animation
const menu = document.querySelector(".menu");
const icon = menu.querySelector(".icon"); 
const menuText = menu.querySelector(".menu-text");

// Create forward animation timeline (paused initially)
let tl = gsap.timeline({ paused: true });

// Add animations to forward timeline:
// 1. Fade out and move menu text right
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
  // 2. Move and rotate the icon
  .to(
    icon,
    {
      x: 90,
      rotation: 90,
      duration: 0.5,
      ease: "elastic.out(.5, 0.5)", // Bouncy elastic animation
    },
    0
  )
  // 3. Expand the menu width
  .to(
    menu,
    {
      width: "280px",
      duration: 0.6,
      ease: "back.out(1.7)", // Slight overshoot animation
    },
    0
  );

// Create reverse animation timeline (paused initially) 
let reverseTl = gsap.timeline({ paused: true });

// Add reverse animations:
// 1. Fade in and reset menu text position
reverseTl.to(
  menuText,
  {
    x: 0,
    opacity: 1, 
    duration: 0.3,
    ease: "power2.inOut",
  },
  0
)
// 2. Reset icon position and rotation
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
// 3. Reset menu width
.to(
  menu,
  {
    width: "250px",
    duration: 0.6,
    ease: "back.out(1.7)",
  },
  0
);

// Play forward animation on hover
menu.addEventListener("mouseenter", () => {
  reverseTl.pause();
  tl.restart();
});

// Play reverse animation when hover ends
menu.addEventListener("mouseleave", () => {
  tl.pause(); 
  reverseTl.restart();
});
