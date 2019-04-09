import React from 'react';

const ImageList = props => {
  const images = props.images.map((image) => {
    return <img alt={image.title} key={image.href} src={image.links[0].href} />
  })
  //technically, i can't use an `id` because that isn't a given property
  //each image does have a unique href though therefor i used that as the value assigned to key prop

  return (
    <div>
      {images}
    </div>
  )
}

export default ImageList
