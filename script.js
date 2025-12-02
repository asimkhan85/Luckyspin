let frame = 1;
let totalFrames = 88;

const img = document.getElementById("spinImage");

document.addEventListener("mousemove", (e) => {
    let speed = Math.floor(e.clientX / 10);
    frame = (speed % totalFrames) + 1;
    img.src = `images/${frame}.png`;
});
