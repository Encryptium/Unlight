# Unlight
Unlight is a powerful library that helps you quickly convert your website into a rich and dynamic dark mode. It's fast, reliable, and highly customizable. Get started with Unlight to create great dark modes.

## Getting Started
Unlight currently only offers one function: to activate dark mode on your website. These dark modes can be very quickly customized to suit the style of the website.

### Importing Unlight
Import Unlight first... of course. 

### Unlight Dark Mode
To use the default dark mode provided by Unlight, just do this JavaScript:
```js
unlight.activateDarkMode();
```
That's it!


*But if you want a more custom dark mode, then continue reading...*

### Custom Dark Mode
Familiarize yourself with the activateDarkMode function:
```js
function activateDarkMode(background="black", colors={}) {...}
```
#### Custom background (optional parameter)
```js
// First parameter activates the background color of the website body with dark mode on.
unlight.activateDarkMode("black");
```

#### Change specific elements (optional parameter)
```js
// This activates dark mode with a body background color of black, and custom color properties for the h1 and p tags.
unlight.activateDarkMode("black", {
	h1: "mediumSeaGreen",
	p: "#ffffff",
});
```

### Other Useful Things
If you want to know whether or not dark mode is active, check the `unlight.darkModeActive` property. It will return `true` if dark mode is active and `false` if not.
