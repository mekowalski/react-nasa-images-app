 import React from 'react';

 class ImageCard extends React.Component {
   constructor(props) {
     super(props)

     this.imageRef = React.createRef()
   }

   //add basic, vanilla js html event listener
   //once load event is emitted, then have successfully loaded the image, now can get height
   componentDidMount() {
     this.imageRef.current.addEventListener('load', this.setSpans)
   }

   //grid-row property takes units of spans
   setSpans = () => {
     console.log(this.imageRef.current.clientHeight)
   }

   render() {
     const { title, links } = this.props.image

     return (
       <div>
        <img
          ref={this.imageRef}
          alt={title}
          src={links[0].href}
        />
       </div>
     )
   }
 }

 export default ImageCard
