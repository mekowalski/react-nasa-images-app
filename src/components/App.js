import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component{
  state = { images: [] }

  onSearchSubmit = async term => {
    const response = await axios.get('https://images-api.nasa.gov/search', {
      params: {
        q: term,
        media_type: 'image'
      },

    })
    this.setState({ images: response.data.collection.items })
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '15px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    )
  }
}

export default App
