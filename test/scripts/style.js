let body = document.querySelector(".main");

body.addEventListener("wheel", (event) => {
  // event.preventDefault();

  body.scrollBy({
    left: event.deltaY < 0 ? -80 : 80,
  });
});

let scrollbarWidth = body.offsetHeight - body.clientHeight;

let main = document.getElementById("app");

main.style.cssText = `--scrollwidth: ${scrollbarWidth / 10}px`;
