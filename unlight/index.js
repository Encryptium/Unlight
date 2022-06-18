const unlight = {
	version: "v1.0.0",
	darkModeActive: false, // Access 'darkMode' to check if darkMode is on
	activateDarkMode: function(backgroundColor="#141414", colors = {}) {
		document.body.style.backgroundColor = backgroundColor;
		allElements = document.querySelectorAll("body *");
		for (let i = 0; i < allElements.length; i++) {
			allElements[i].style.color = "white";
		}

		for (var element in colors) {
      if (colors.hasOwnProperty(element)) {
        // console.log(element + " -> " + colors[element]);
				var selectedElements = document.querySelectorAll(element);
				for (let i = 0; i < selectedElements.length; i++) {
					selectedElements[i].style.color = colors[element];
				}
      }
    }

		this.darkMode = true;
	}
}
