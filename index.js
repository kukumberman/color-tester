let index = 0;
let isFullscreen = false;

const colors = [
  "black",
  "gray",
  "white",
  "red",
  "yellow",
  "green",
  "blue",
  "purple"
]

updateColor();

function updateColor() {
  document.body.style.backgroundColor = colors[index];
}

function nextColor() {
  index = (index + 1) % colors.length;
  updateColor();
}

function changeColor(incremental) {
  index += incremental;
  if (index === colors.length) {
    index = 0;
  }
  else if (index < 0) {
    index = colors.length - 1;
  }
  updateColor();
}

function toggleFullscreen() {
  if (isFullscreen) {
    document.exitFullscreen();
  }
  else {
    document.documentElement.requestFullscreen();
  }
  isFullscreen = !isFullscreen;
}

document.addEventListener("click", e => {
  nextColor();
});

document.addEventListener("keyup", e => {
  if (e.code === "ArrowRight") {
    changeColor(1);
  }
  else if (e.code === "ArrowLeft") {
    changeColor(-1);
  }
  else if (e.code === "Space") {
    if (document.fullscreenEnabled) {
      toggleFullscreen();
    }
    else {
      alert("fullscreen is not supported");
    }
  }
});
