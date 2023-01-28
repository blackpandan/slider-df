function slider(hiddenClass = "show-df") {
  let elements = document.querySelectorAll(".hidden-df");
  let head = document.getElementsByTagName("head")[0];

  let style = document.createElement("style");

  style.innerHTML = `
.hidden-df{
	opacity: 0;
	filter: blur(2px);
	transform: translateX(100px);
	transition: all 1s;
}

.${hiddenClass}{
	opacity: 1;
	filter: blur(0);
	transform: translateX(0);
}
`;

  head.appendChild(style);
  function animate(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(hiddenClass);
        console.error("is Intersecting");
      } else {
        entry.target.classList.remove(hiddenClass);
        console.error("is Not Intersecting");
      }
    });
  }

  let observer = new IntersectionObserver(animate);

  elements.forEach((element) => {
    observer.observe(element);
  });
}

export default slider;
