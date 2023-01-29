/**
 * A slider function that animates elements in the DOM(on scroll) or once the appear in the viewport
 * 
 * @param {Object} parameters [optional] -> expecting an object containing [optional] options: {object} and [optional] hiddenClass: {string}
 
  Default
  -------

 ```javascript 
  {
    options: {
      duration: 1,
      filter: 2
    },
    hiddenClass: 'show-df'
  }
```
  .
 
 * @param {type} parameters.options [optional] -> an object that accepts duration and filter as its properties default values provided

 Default
 -------

```javascript
  {
    duration: 1,
    filter: 2
  }
```

 .

 * @param {type} parameters.hiddenClass [optional] -> a string that contains custom name for the class that executes when the element is visible in the viewport
 
 Default
 -------

```javascript 
 hiddenClass: "show-df"
```

 .
 
**/

function slider(parameters = {}) {
  // destructuring parameteters
  let { options: options = {}, hiddenClass: hiddenClass = "show-df" } =
    parameters;

  // creating css style tag
  let elements = document.querySelectorAll(".hidden-df");
  let head = document.getElementsByTagName("head")[0];

  let style = document.createElement("style");

  // checking for options
  let { duration: duration = 1, filter: filter = 2 } = options;

  // css styling
  style.innerHTML = `
.hidden-df{
	opacity: 0;
	filter: blur(${filter}px);
	transform: translateX(100px);
	transition: all ${duration}s;
}

.${hiddenClass}{
	opacity: 1;
	filter: blur(0);
	transform: translateX(0);
}
`;

  head.appendChild(style);

  // using Intersection observer to apply styles
  function animate(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(hiddenClass);
        // console.error("is Intersecting");
      } else {
        entry.target.classList.remove(hiddenClass);
        // console.error("is Not Intersecting");
      }
    });
  }

  let observer = new IntersectionObserver(animate);

  elements.forEach((element) => {
    observer.observe(element);
  });
}

export default slider;
