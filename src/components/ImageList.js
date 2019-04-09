import React from 'react';

const ImageList = props => {
  const images = props.images.map(({ title, href, links }) => {
    return <img alt={title} key={href} src={links[0].href} />
  })

  return (
    <div>
      {images}
    </div>
  )
}

export default ImageList
