## v2.1.1 - June 23, 2022

Features:
- Added clarifications to importing Unlight in `README.md`

Bug Fixes:
- Fixed problem where importing `index.js` wouldn't work

## v2.1.0 - June 22, 2022

Features:
- Added persistence
- Added `persistenceIdentifier`
- Added coordination between multiple Unlight instances
- Added automatic deactivation of previous active instances when activating a new one
- Backwards compatible with `v2.0.0`
- Added `"use strict";`

Bug Fixes:
- Fixed bug where multiple active Unlight themes would interfere with each other


## v2.0.0 - June 21, 2022

Features:
- Added ability to add classes to specific HTML elements
- Added option to deactivate specific parts of a theme
- Added capability of handling and managing different themes separately
- Added `deactivate()` function to turn off themes
- Added `restoreState` to revert to a specific version of the site when `deactivate()` is called

Changed:
- Changed Unlight from function based to class based
- Changed `darkModeActive` property to `isActive` property

Removed:
- Removed ability to style within the Unlight library
To style, you will have to declare custom classes and style them in CSS.

Bug Fixes:
- Fixed inability to deactivate a theme once Unlight was turned on

## v1.0.1 - June 18, 2022

Features:
- Activating a dark theme which you can customize completely in the Unlight.js library.
- Added ability to check if Unlight was active or not
- Easy to use JSON type preferences