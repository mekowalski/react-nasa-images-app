# Challenges To Conquer
1. Need to get user feedback, get the search term text in a searchbar
2. Once search term is retrieved, make a request to external API and fetch data
3. Taking list of images and rendering list on screen

## What Components To Create
- [x] App Component, as always
  - Parent for and renders SearchBar and ImageList
  - App responsible for showing HTML/Content to users and interacting/handling user interactions

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

- [x] Handle Form Submission
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
  - [x] Refactor App to class-based component
  - [x] Define callback function on App (onSearchSubmit)
  - [x] Update App to have State prop and set list of images on that State

- Fetching Data!!!
  - Load data to Application, make network request to NASA images/videos API
  - [x] Build request with Axios (axios is responsible for making requests and fetching data from network)
  - first use API with only search q= and then try to customize to request only images
  - add header for authorization
  - View request result from NASA API
  - So far, in Console Network, there are 2 requests made for the search term, only care about the request made with method: GET
  - Request to get data order: collections -> items -> # -> data -> # -> links -> # -> href
  - ^this is the path to get a url/link/href for a photo that relates to the search. the `#`s are the index of the results. the href has a link with a trail of `~thumb.jpg` which shows a decent sized photo in a new tab.  there are collections of photos i can access for 1 entry of the result but i think that i want just select the initial default photo given in the JSON

  - [x] Actually get data from the request that was made
    - handle with async await
    - [x] print out number of images resulted from request(temp)
    - console error: `Unhandled Rejection (TypeError): this.setState is not a function`
    - to fix, either set up construtor() to bind `onSearchSubmit()` OR use arrow function

    - First method: Promise `.then`
    - response: `response.data.collection.items` contains the list of images that i care about
    - from there `.#.links.#.href` contains the 1 thumb image

    - Second method: Async Await
    - able to assign variable to await axios request
    - console.log(response.data.collection.items) still provides list of images

  - [x] Refeactor App comp to not have Axios configuration
    - Axios config separate then reference within App component
    - Config components: URL and API-key
    - import api file in App component

  - ImageList Component
  - [] Also eventually render a list/display of images on the screen
    - turn it into actual JSX elements
    - loop(map) over images in array and return brand new component
  - communicate list of images, just fetched, down to ImageList (Parent to Child)
    - [x] define and pass prop
