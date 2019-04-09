import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component{
  state = { images: [] }

  async onSearchSubmit(term) {
    const response = await axios.get('https://images-api.nasa.gov/search', {
      params: {
        q: term,
        media_type: 'image'
      },
      headers: {
        Authorization: 'API-key fLIfZZeWjAhPawnoL8lIyubp9JeOYPSdvJUU4jYk'
      }
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
