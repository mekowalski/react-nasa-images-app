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
