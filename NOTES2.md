# Version 2
- Refactor to create display with:
  - [x] reasonable sized images(currently some are massive)
  - [x] a grid display(currently a list that you have to scroll to see 100 images)
    - set number of columns, automatically decides how many columns to put in
  - [x] take care of off spacing with images

- Grid CSS
  - [] get photos to somewhat 'scrunch' up next to one another to remove weird gaps
  - [] create new React component(ImageCard) to render 1 single image at a time
    - component will figure out how large image is then adjust the grid size
