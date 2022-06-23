# Unlight
Unlight is a powerful library that helps you quickly convert your website into a rich and dynamic dark mode. It's fast, reliable, and highly customizable. Get started with Unlight to create great dark modes.

## Getting Started
Unlight offers you the option to assign special classes to specific elements when activating a certain site-wide theme. You can them style these element classes to make it suitable for your site.

### Importing Unlight
#### Unlight CDN
```html
<!-- Import the Unlight CDN -->
<script src="//cdn.jsdelivr.net/npm/unlight/index.js"></script>

<!-- Rest of the code should be AFTER all the body and Unlight script tag -->
<script src="script.js"></script>
```

#### Hosting Unlight Locally
Download the Unlight `index.js` file and import it the same as how you would import the CDN:
```html
<!-- Import the locally hosted Unlight lib -->
<script src="/path/to/unlight.js"></script>

<!-- Rest of the code should be AFTER all the body and Unlight script tag -->
<script src="script.js"></script>
```

### Activating Unlight Dark Mode/Other Themes
Please note that Unlight does not automatically style everything for you. It will only style the background color you define when Unlight is activated. Styling will require CSS after all class definitions have been made.
Familiarize yourself with the Unlight class definition:
```js
const unlight = new Unlight({
	background: "black", // default: #141414
	classes: {
		"*": "darkmode", // assigns .darkmode class to all elements
		h1: "override" // adds .override class on h1
	},

	// Organizes persistence so the theme is saved in the browser
	persistent: true,
	persistenceIdentifier: "myID"
});

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
const unlight = new Unlight({
	background: "black", // default: #141414
	classes: {
		"*": "darkmode", // assigns .darkmode class to all elements
		h1: "override" // override .darkmode class on h1
	}
});

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

### Persistence
Unlight offers a reliable persistence feature for custom themes. User preferences for themes will be saved in the browser `localStorage`. Additionally, this feature is fully backwards compatible, but it's always best to use the latest version as support will eventually drop for older versions.

To activate persistence in your theme declaration:
```js
const unlight = new Unlight({
	background: "black",
	classes: {
		p: "classforpara",
		"*": "dark",
		h1: "override"
	},
	// Add these //
	persistence: true,
	// Make sure you declare a UNIQUE identifier
	// It is used to seperate different persistent classes
	persistenceIdentifier: "mycustomtheme"
});
```
The persistence identifer allows Unlight to manage multiple declared themes which are all persistent. By default, persistence is turned off. **`persistenceIdentifier` is NECESSARY if you choose to make the theme persistent.**

**Note:** If you have multiple themes, and you activate one of them, all of the other themes will automatically be turned off. This is to prevent overlapping or unappealing, unintended theme mixing.

#### Restricted Variable `unlightInstances`
Unlight persistent uses a variable which cannot be redeclared or should not be modified unless intentional. The variable is called `unlightInstances`. It monitors all the instances in which Unlight is declared on. This is how persistence is kept track of and how all the Unlight instances can interact with each other. If the name `unlightInstances` interferes with your code, download Unlight code and replace all occurances of `unlightInstances` with a preferred variable name.

## Other VERY USEFUL Things
If you want to know whether or not dark mode is active, check the `unlight.isActive` property. It will return `true` if Unlight is active and `false` if not.

As stated earlier, when assigning classes to specific elements in Unlight, you can also use special CSS selectors e.g.
```js
// special class to input elements with type 'text'
const unlight = new Unlight({
	background: "black",

	classes: {
		h1: "darkmode-h1",
		// Only selects text inputs
		"input[type=\"text\"]": "darkmode-textinputs"
	}
});

unlight.activate();
```

When deactivating Unlight, not want to revert completely and keep a few classes active. Normally, Unlight switches itself off by removing all the classes you've defined in the `Unlight` class definition. So in the `deactivate()` function, you can define your own `restoreState`. The restore state is an array of all the classes to be removed when the `deactivate()` function is called. But note that if you don't want the background to restore, pass `false` into the second parameter:
```js
// Unlight will remove all the classes in this array 
unlight.deactivate(["remove-this-class", "and-this"], false);
// false prevents the background from reverting to the original
```

**Unlight is licensed under the MIT license**
