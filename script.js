const menu = document.querySelector(".menu");
const icon = menu.querySelector(".icon");
const menuText = menu.querySelector(".menu-text");

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

let reverseTl = gsap.timeline({ paused: true });

reverseTl.to(menu, {
  width: "250px",
  duration: 0.3,
  ease: "power2.inOut"
})
.to(icon, {
  x: 0,
  rotation: 0,
  duration: 0.3,
  ease: "power2.inOut"
}, 0)
.to(menuText, {
  x: 0,
  opacity: 1,
  duration: 0.2,
  ease: "power2.inOut"
}, 0.1);

menu.addEventListener("mouseenter", () => {
  reverseTl.pause();
  tl.restart();
});

menu.addEventListener("mouseleave", () => {
  tl.pause();
  reverseTl.restart();
});
