# slider-df
a slider package to help create animations on scoll

## Instructions
---------------

- first install the package with `npm install slider-df`

- import it in your javascript and execute it simple for now.

- for elements you intend to add simple animation to on scroll add a class name 'hidden-df'

- example

html
```html
<p class="hidden-df">Hello</p>
```

javascript
```javascript
import slider from "slider-df";

slider();
```

- additionals options are aso provided to change the duration and filter of the element when animating

javascript
```javascript
import slider from "slider-df";

slider(
{
	options: {
		duration: 2, // in seconds
		filter: 5, // in pixels
	}
}
);

```

https://user-images.githubusercontent.com/66978421/215296297-cf4bdc62-36f3-4cf9-aa4a-e7f0d946dc1f.mp4




- new features will continue to be added, suggestions are welcome `slider-df@devfate.com`
