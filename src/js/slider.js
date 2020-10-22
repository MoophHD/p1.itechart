const SLIDETIME = 600;

const leftBtn = document.querySelector(".jsSlideLeft");
const rightBtn = document.querySelector(".jsSlideRight");
const allItems = [...document.querySelectorAll(".jsSlide")];
let clickable = true;
let active = null;
let newActive = null;

function initSlider() {
  allItems.forEach((item) => {
    item.setAttribute(
      "style",
      `transition: transform ${SLIDETIME}ms ease; animation-duration: ${SLIDETIME}ms`
    );
  });
}

function changeItem(right) {

  console.log("click");
  if (clickable) {
    clickable = false;

    active = document.querySelector(".active");
    const activeItemIndex = allItems.indexOf(active);

    if (right) {
      newActive = allItems[(activeItemIndex + 1) % allItems.length];
      active.classList.add("slideOutLeft");
      newActive.classList.add("slideInRight", "active");
    } else {
      newActive =
        allItems[(activeItemIndex + allItems.length - 1) % allItems.length];
      active.classList.add("slideOutRight");
      newActive.classList.add("slideInLeft", "active");
    }
  }
}

allItems.forEach((item) => {
  item.addEventListener("transitionend", () => {
    if (item == active && !clickable) {
      clickable = true;

      active.classList.remove(
        "active",
        "slideInLeft",
        "slideInRight",
        "slideOutLeft",
        "slideOutRight"
      );
    }
  });
});

rightBtn.addEventListener("click", () => {
  changeItem(true);
});

leftBtn.addEventListener("click", () => {
  changeItem(false);
});

initSlider();
