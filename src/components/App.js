import React from 'react';
import nasaImagesApi  from '../api/nasaImagesApi';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
  state = { images: [] }

  onSearchSubmit = async term => {
    const response = await nasaImagesApi.get('/search', {
      params: {
        q: term,
        media_type: 'image'
      }
    })
    this.setState({ images: response.data.collection.items })
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '15px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList />
        Found: {this.state.images.length} images
      </div>
    )
  }
}

export default App
