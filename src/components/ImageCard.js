//purpose is to show one image alone
//then figure out auto adjust and etc
 import React from 'react';

 class ImageCard extends React.Component {
   render() {
     return (
       <div>
        <img
          alt={this.props.image.title}
          src={this.props.image.links[0].href}
        />
       </div>
     )
   }
 }

 export default ImageCard
