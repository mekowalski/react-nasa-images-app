 import React from 'react';

 class ImageCard extends React.Component {
   constructor(props) {
     super(props)
     this.state = { spans: 0 }

     this.imageRef = React.createRef()
   }

   componentDidMount() {
     this.imageRef.current.addEventListener('load', this.setSpans)
   }

   setSpans = () => {
     const height = this.imageRef.current.clientHeight

     const spans = Math.ceil(height / 150)

     this.setState ({ spans })
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
