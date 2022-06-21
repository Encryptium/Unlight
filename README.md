# Unlight
Unlight is a powerful library that helps you quickly convert your website into a rich and dynamic dark mode. It's fast, reliable, and highly customizable. Get started with Unlight to create great dark modes.

## Getting Started
Unlight currently only offers one function: to activate dark mode on your website. These dark modes can be very quickly customized to suit the style of the website.

### Importing Unlight
Import Unlight first... of course. 

### Activating Unlight Dark Mode/Other Themes
Please note that Unlight does not automatically style everything for you. It will only style the background color you define when Unlight is activated. Styling will require CSS after all class definitions have been made.
Familiarize yourself with the Unlight class definition:
```js
const unlight = new Unlight(
	background: "black", // default: #141414
	classes: {
	  "*": "darkmode", // assigns .darkmode class to all elements
	  h1: "override" // override .darkmode class on h1
	}
);

unlight.activate(); // Calls activate function
```
#### Custom background (optional)
```js
// this defines the background color of body
const unlight = new Unlight({
	background: "black", // default: #141414
});

unlight.activate(); // Calls activate function
```

#### Assign dark mode classes (required)
```js
// This assigns custom classes to the h1 and p tags.
const unlight = new Unlight({
	classes: {
		h1: "darkmode-h1",
		p: "darkmode-p"
	}
});

unlight.activate(); // Calls activate function
```
**Note:** If you want to assign a class to everything, use `"*": "class-name"` for the selector. You may use other special CSS selectors as well.

### Adding styles
Now that you've assigned classes to everything you want, let's style them using CSS!

**JS:**
```js
const unlight = new Unlight(
	background: "black", // default: #141414
	classes: {
	  "*": "darkmode", // assigns .darkmode class to all elements
	  h1: "override" // override .darkmode class on h1
	}
);

unlight.activate(); // Calls activate function
```
**CSS:**
```css
.darkmode {
	color: white;
}

.darkmode code {
	background-color: #373737;
}

.override {
	color: mediumseagreen;
}
```
There we go! We've just added all the styles for our custom dark theme.

### Deactivating Unlight
After activating Unlight, you will definitely need to deactivate it at some point.

Deactivating is very simple (after you've activated it already):
```js
unlight.deactivate(); // Calls deactivate function
```

### Other VERY USEFUL Things
If you want to know whether or not dark mode is active, check the `unlight.isActive` property. It will return `true` if Unlight is active and `false` if not.

As stated earlier, when assigning classes to specific elements in Unlight, you can also use special CSS selectors e.g.
```js
// special class to input elements with type 'text'
const unlight = new Unlight({
	background: "black",
	
	classes: {
	  h1: "darkmode-h1",
		"input[type=\"text\"]": "darkmode-textinputs"
	}
});

unlight.activate();
```

When deactivating Unlight, you might want a specific mixed theme you want to switch back to. Unlight switches off itself by removing all the classes you've defined in the `Unlight` class definition. So in the `deactivate()` function, you can define your own `restoreState`. The restore state is an array of all the classes to be removed when the `deactivate()` function is called. But note that if you don't want the background to restore, pass `false` into the second parameter:
```js
// Unlight will remove all the classes in this array 
unlight.deactivate(["remove-this-class", "and-this"], false);
// false prevents the background from reverting to the original
```
