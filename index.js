"use strict";

let unlightInstances = [];

class Unlight {
	constructor(prefs) {
		unlightInstances.push(this);
		this.version = "v2.1.1";
		this.restoreBg = document.body.style.color;
		this.isActive = false;
		this.restoreState = [];

		// Prefs
		this.background = prefs.background || "#141414";
		this.classes = prefs.classes;
		this.persistent = prefs.persistent || false;
		if (this.persistent) {
			this.idendifier = prefs.persistenceIdentifier;
		}

		// Preliminary Checks
		if (this.persistent) {
			if (localStorage.getItem(this.idendifier + "Active") == 'true') {
				this.activate();
			} 
		}
	}

	activate() {
		// Deactivate all previous instances
		for (let i = 0; i < unlightInstances.length; i++) {
			unlightInstances[i].deactivate();
		}
		
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

		if (this.persistent) {
			localStorage.setItem(this.idendifier + "Active", 'true');
		}
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
		if (this.persistent) {
			localStorage.setItem(this.idendifier + "Active", 'false');
		}
	}
}