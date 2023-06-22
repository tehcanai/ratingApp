
# Framework and Dependencies

This project is developed with the NextJS framework and uses several packages and dependencies for its development:

- Tailwind

- MaterialUI

- NextJS Google Fonts

# Structure

`/app
|---/components
|     |---circle_button.js
|     |---submit_button.js
|---/style
|     |---fonts.js
|     |---theme.js
|---layout.js
|---page.js`

**page.js**

This is the main page that renders the app. Here, the app renders either the rating card or the thank you card depending on whether a rating has been submitted or not.
Both the rating card and thank you card are defined here. The behaviour of the app and its components are dependent on three states eg. rating, isSelected, isSubmitted.

**theme.js** 
This file exports the theme of the app to be used by other components and pages

**fonts.js**
This file exports the font of the app to be used by other components and pages

**circle_button.js** 
The circle button where users will select their chosen rating is defined here. The circle button is used in the rating card. The code here defines the behaviour of the button when it is hovered over, when clicked on, and when it is selected.

**submit_button.js** 
The submit buttom where users will click on to submit their rating is defined here. The submit button is used in the rating card. The code here defines the behaviour of the button when it is hovered over, when clicked on, and when it is selected.
