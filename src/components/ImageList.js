import React from 'react';

const ImageList = props => {
  const images = props.images.map((image) => {
    return <img src={image.links[0].href} />
  })
  //warning: ./src/components/ImageList.js
  //Line 5:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

  return (
    <div>
      {images}
    </div>
  )
}

export default ImageList
