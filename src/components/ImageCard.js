 import React from 'react';

 class ImageCard extends React.Component {
   render() {
     const { title, links } = this.props.image

     return (
       <div>
        <img
          alt={title}
          src={links[0].href}
        />
       </div>
     )
   }
 }

 export default ImageCard
