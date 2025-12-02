const total = 88;  // total photos
let current = 1;
const img = document.getElementById("spinImage");

let startX = 0;
img.addEventListener("touchstart", e => { startX = e.touches[0].clientX; });
img.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  if (endX < startX - 20) {
    current = current < total ? current + 1 : 1;
    img.src = `images/${current}.png`;
  } else if (endX > startX + 20) {
    current = current > 1 ? current - 1 : total;
    img.src = `images/${current}.png`;
  }
});

img.addEventListener("mousedown", e => { startX = e.clientX; });
img.addEventListener("mouseup", e => {
  const endX = e.clientX;
  if (endX < startX - 20) {
    current = current < total ? current + 1 : 1;
    img.src = `images/${current}.png`;
  } else if (endX > startX + 20) {
    current = current > 1 ? current - 1 : total;
    img.src = `images/${current}.png`;
  }
});
