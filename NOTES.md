# Challenges To Conquer
1. Need to get user feedback, get the search term text in a searchbar
2. Once search term is retrieved, make a request to external API and fetch data
3. Taking list of images and rendering list on screen

## What Components To Create
- [x] App Component, as always
  - Parent for and renders SearchBar and ImageList

- [x] Create SearchBar component
  - responsible of showing only text input at top of screen
  - handle typing event
  - need a text input for now
  - [x] Add styling from Semantic UI(maybe later include a NASA logo)

- [] ImageList Component
  - take list of images and render it on the screen

- I'll probably have a few different components in this app
- These components will also have respective CSS files for styling, at some point
- Create structure for `components`, `apis` and maybe `css` folders

## Functionality: Creating Event Handlers
- Code to detect anytime a user enters text in searchbar
- [x] Define event handler for input
  - called anytime the text is changed in the input

- [x] Refactor SearchBar from uncontrolled to controlled element
  - initialize with state object

- [] Handle Form Submission
  - when user presses enter key, trigger search for images
  - eg: `orion` => displays list of images to orion

  - [x] Disable default from action
  - console error: `TypeError: Cannot read property 'state' of undefined`, most common error message
  - `this` in JS: JS thinks that `this` is equal to value `undefined`
  - Rule: anytime you want to figure out the value of `this` is, look at WHERE the function is called AND look at the variable to the left of the dot. eg: variable.method()

  - [x] fix `TypeError`
    - either define constructor() with a binding to overwrite existing function OR
    - turn the event handler function to an Arrow function instead =>, which automatically binds `this`
    - I used arrow function, cleaner and less code to write, fixed `TypeError`

## NASA Image and Video Library
- Root URL: `https://images-api.nasa.gov`
- Endpoint I will use: `GET /search?q={q}` to perform a search
- eg: `https://images-api.nasa.gov/search?q=saturn&media_type=image` will display images related to saturn


## Where To Initiate Fetching Images
- SearchBar purpose is to allow user to type input & submit it, not responsible to make request for images
- App should be responsible for fetching images from external API request
  - (Communicate from Child to Parent, from SearchBar to App)
  - [] Refactor App to class-based component
  - [] Define callback function on App (onSearchSubmit)
