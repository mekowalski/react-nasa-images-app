# React Nasa Images App

This is for diving deeper into React, including topics of: User Input with Forms and Events

Kowalski, are you there?

## App Summary
- In this NASA Images Application I continued practicing handling user input with Froms and Events
- External API from NASA Images API, root url: `https://images-api.nasa.gov`
- This connection returns images, with params of `q(query)` & `media_type('image')`, given a search term
  - eg: saturn returns images related to saturn
- What was learned:
  - Component Design and Structure
  - Forms to interact with user
  - Building, modifying and handling Events and Submissions
  - Connection of External API and figuring out how to request/retrieve/display data
  - Axios was used alongside async await
  - Refactoring a few components from uncontrolled to controlled
  - Communcating from Child to Parent and incoking callbacks in Children
  - Using Grid CSS to workout the wonky image displays and gaps

- A few things that do not work in the App:
  - Currently the application returns 100 images
  - Currently the images returned still have minor spacing issues(some images are right on top of another)
  - There isn't much of a functioning app, the interaction is solely searching for images within NASA
  - A user will only be able to search for images and get a basic display(no comments, titles, etc)

### App Review
- SearchBar: Event Handlers
  1. With an event handler, take an input/form tag
  2. Pass a callback() to a specifically named props(<form onSubmit={this.onFormSubmit}, etc)
  3. When that tag/element emits event, that callback() will be called
  - Rule to keep in mind: anytime there is a cb(), be safe to use ES6 =>() syntax, which will bind the function and have the appropriate value of `this`
  - With Props system, only communicate from Parent down to Child(later an issue)
  - To communicate from Child to Parent, pass a cb() from Parent to Child, then Child will call the cb()

- PhotoList: Render photos, a list of photos
  1. Map function, whenever rendering a list, probably will reach for Map function
  2. Any time a list is made, define a `key` on the root element of that list that is consistent and unchanging
  - eg: key={image.href}, href used because `id` wasn't present and href was still very unique to each image

- ImageCard: React Ref System
  1. Reach into DOM to interact with an individual element
  2. Ref is created in the constructor() and wired up to an element passed as a ref property
  3. Ref can be accessed later and handle the actual DOM node

- Grid CSS System
  1. Not completely necessary
  2. This is still fairly new and undergoing changes
  3. Great reason to use for figuring out how the Ref system works
