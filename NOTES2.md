# Version 2
- Refactor to create display with:
  - [x] reasonable sized images(currently some are massive)
  - [x] a grid display(currently a list that you have to scroll to see 100 images)
    - set number of columns, automatically decides how many columns to put in
  - [x] take care of off spacing with images

- Grid CSS
  - [] get photos to somewhat 'scrunch' up next to one another to remove weird gaps
  - [x] create new React component(ImageCard) to render 1 single image at a time
    - component will figure out how large image is then adjust the grid size

  - [x] use ImageCard inside ImageList instead of img tag

- Access DOM with refs
  - To access DOM elements directly using React, vanilla JS won't work,
  - Use React Ref system: gives access to single DOM element
  - [x] Create refs in constructor(), assign to instance variable then pass to particular JSX as props
  - [x] Also need to define `componentDidMount` life cycle
    - returns 0 for clientHeight: browser console doesn't know the data inside the DOM node of img, only until the object is expanded, then expand current: img
    - console.log-ging the values before the image has had a chance to load up
    - tiny refactor `componentDidMount` to access image height only after it has become available

  - [x] figure out the image height
  - [x] take height and set it on State on each re-rendered component
  - [x] when re-rendering, use image height to generate appropriate `grid-row` property
    - working a little better but there are still some spaces that are just too big
    - make rows much smaller to get fine-grain details, won't over-allocate too many rows to an image
