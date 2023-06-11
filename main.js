///loader
const loadingPage = function () {
  setTimeout(function () {
    window.location.href = "../html/scene0.html";
  }, 2000);
};

///play
function play() {
  window.location.href = "html/loaderPage.html";
}

/// llamo al loader
let loaderPage = document.getElementById("loader-page");
console.log(loaderPage);

if (loaderPage) {
  loadingPage();
}
