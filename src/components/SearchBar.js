import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className='ui segment'>
        <form className='ui from'>
          <div className='field'>
            <label>Search NASA Images </label>
            <input type='text' />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
