// const soundtractk = document.getElementById("soundtractk");
// const musik = document.getElementById("musik");

// musik.addEventListener("click", function () {
//   soundtractk.play();
// });

const soundtrack = document.getElementById("soundtrack");
const musik = document.getElementById("musik");

musik.addEventListener("click", function () {
  if (soundtrack.paused) {
    soundtrack.play();
  } else {
    soundtrack.pause();
  }
});
