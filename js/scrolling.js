

// To modify the behavior of the horizontal scroll effect, make changes to the `offsetRatio` and `moveRatio`

const page = document.querySelector(".page");
const horizontalMotionObj = document.querySelector(".horizontal-motion-obj");
let horizontalMotionObjRect = horizontalMotionObj.getBoundingClientRect();

document.addEventListener("scroll", (event) => {
  let lastKnownScrollPosition = window.scrollY-6000;
  // windowHeight = window.screen.height;
  let windowHeight = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
  let windowWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

  let moveX = horizontalMotionObjRect.top - windowHeight - lastKnownScrollPosition
  let offsetRatio = 0 // update this number to specify the ratio of the window width to offset the container that will move
  let initialOffset = windowWidth * offsetRatio
  let moveRatio = 1 // update this number to specify the magnitude of horizontal movement

  horizontalMotionObj.style.transform = `translateX(${(moveX + initialOffset) * moveRatio}px)`;
})

let paraScrollLeft = document.querySelector(".p--scroll-left");
let paraScrollRight = document.querySelector(".p--scroll-right");

window.onscroll = () => {
  let pos = window.scrollY-2000;
  console.log('posY', pos) // Indicates number of pixels the document is currenlty scrolled vertically from origin
  let ratio = 0.1 // The higher the ratio, faster the scroll
  let offset = 130
  let leftPos = offset - (pos * ratio)
  let rightPos = (110 * offset) + (pos * ratio)
  
  paraScrollLeft.style.transform = `translateX(${leftPos}%)`
  paraScrollRight.style.transform = `translateX(${rightPos}%)`
}