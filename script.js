let totalFrames = 88; 
let currentFrame = 1;
let img = document.getElementById("spinImage");

let startX = 0;

document.addEventListener("mousedown", (e) => {
    startX = e.clientX;
});

document.addEventListener("mousemove", (e) => {
    if (e.buttons === 1) {
        let diff = e.clientX - startX;

        if (diff > 5) {
            currentFrame++;
            if (currentFrame > totalFrames) currentFrame = 1;
            img.src = `images/${currentFrame}.png`;
            startX = e.clientX;
        }

        if (diff < -5) {
            currentFrame--;
            if (currentFrame < 1) currentFrame = totalFrames;
            img.src = `images/${currentFrame}.png`;
            startX = e.clientX;
        }
    }
});

// Mobile Touch Support
document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchmove", (e) => {
    let diff = e.touches[0].clientX - startX;

    if (diff > 5) {
        currentFrame++;
        if (currentFrame > totalFrames) currentFrame = 1;
        img.src = `images/${currentFrame}.png`;
        startX = e.touches[0].clientX;
    }

    if (diff < -5) {
        currentFrame--;
        if (currentFrame < 1) currentFrame = totalFrames;
        img.src = `images/${currentFrame}.png`;
        startX = e.touches[0].clientX;
    }
});
