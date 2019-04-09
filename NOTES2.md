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
  - [] Create refs in constructor(), assign to instance variable then pass to particular JSX as props
  
  - [] figure out the image height
  - [] take height and set it on State on each re-rendered component
  - [] when re-rendering, use image height to generate appropriate `grid-row` property
