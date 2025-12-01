let frame = 1;
let totalFrames = 88;

let img = document.getElementById("spin");

let images = [];

// Load 1.png to 88.png sorted
for (let i = 1; i <= totalFrames; i++) {
    images.push(`images/${i}.png`);
}

let isDragging = false;
let startX = 0;

document.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        let diff = e.clientX - startX;

        if (diff > 5) {
            frame++;
            if (frame > totalFrames) frame = 1;
            img.src = images[frame - 1];
            startX = e.clientX;
        }

        if (diff < -5) {
            frame--;
            if (frame < 1) frame = totalFrames;
            img.src = images[frame - 1];
            startX = e.clientX;
        }
    }
});
