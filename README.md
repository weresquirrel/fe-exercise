# fe-exercise
A little exercise for front end developers.

## Goal
- Replicate the flat design as a fully functioning, responsive web page.

## Overview
- This landing page is a portal to 3 microsites.  Each link has
  a full page background attached to it.  House and Beach have images
	associated with them, Stud will have a looping video.  When a user
	hovers on one of the links, the associated background will show on screen.

## Objectives
- The page has a full screen image backgrounds.  It should adapt to any 
  viewport size and the image should crop rather than skew to fill 
	the browser size.  The anchor point of the image should be centred.

- There is a site-wide header at the top with a hamburger icon on the
  right side.  Clicking this should fade in a full page navigation menu and
	change the hamburger icon to a cross.  Clicking the cross icon will toggle
	the state back to the normal page.

- If you hover over any of the bottom links, a vertical white line should
  fly in from underneath.

- The instagram icon should link to a new window/tab to an instagram account.

## Guidelines
- Please compile your stylesheet using Sass to the root folder as demonstrated.
  We have included both a .sass and .scss version to get you started, use
	whichever syntax you are more comfortable with.  The theme colours have 
	already been included as variables.  You are free to structure the Sass 
	as you see fit.

- You are free to use vanilla JavaScript or jQuery, but no other plugins,
  libraries or frameworks should be used.

- As this a full page design that adapts to the viewport size, there should
  not be any scrolling behaviour.

- You can use the provided hamburger and cross svgs that have been provided,
  but if you feel a more elegant solution is viable, you can build that.



### Optional challenge!
- You can make the backgrounds behave like a carousel by making them switch 
	on a timed loop.  When a user hovers on a link the associated background 
	comes in as usual, then when the user hovers out the carousel begins again.
	Remember, only hand coded scripts please!