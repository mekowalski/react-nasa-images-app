import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component{
  //axios with async await syntax
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
    console.log(response.data.collection.items)
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '15px' }}>
      <SearchBar
        onSubmit={this.onSearchSubmit}
      />
      </div>
    )
  }
}

export default App
