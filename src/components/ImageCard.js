 import React from 'react';

 class ImageCard extends React.Component {
   constructor(props) {
     super(props)

     this.imageRef = React.createRef()
   }

   componentDidMount() {
     console.log(this.imageRef.current.clientHeight)
   }
   //returns 0 for clientHeight

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
