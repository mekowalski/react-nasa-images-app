import React from 'react';

const ImageList = props => {
  const images = props.images.map((image) => {
    return <img src={image.items[i].links.href} />
  })
  //TypeError: Cannot read property 'links' of undefined

  return (
    <div>
      {images}
    </div>
  )
}

export default ImageList

//items.links.href
//property path: collection.items[""0""].links[""0""].href
//how do i get the index? create new index variable and call it?
