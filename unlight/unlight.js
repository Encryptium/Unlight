class Unlight {
	constructor(prefs) {
		this.version = "v2.0.0";
		this.restoreBg = document.body.style.color;
		this.background = prefs.background || "#141414";
		this.classes = prefs.classes;
		this.isActive = false;
		this.restoreState = [];
	}

	activate() {
		document.body.style.backgroundColor = this.background;
		for (var element in this.classes) {
      if (this.classes.hasOwnProperty(element)) {
				this.restoreState.push(
					this.classes[element]
				);
				var selectedElements = document.querySelectorAll(element);
				for (let i = 0; i < selectedElements.length; i++) {
					selectedElements[i].classList.add(this.classes[element]);
				}
      }
    }
	
		this.isActive = true;
	}

	deactivate(restoreState=this.restoreState, deactivateBg=true) {
		if (deactivateBg) {
			document.body.style.backgroundColor = this.restoreBg;
		}
		
		for (let i = 0; i < restoreState.length; i++) {
			var targetElements = document.querySelectorAll("." + restoreState[i]);
			for (let j = 0; j < targetElements.length; j++) {
				targetElements[j].classList.remove(restoreState[i]);
			}
		}
		restoreState = [];
		this.isActive = false;
	}
}