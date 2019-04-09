import React from 'react';

class SearchBar extends React.Component {
  onInputChange() {

  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Search NASA Images </label>
            <input type='text' inChange={this.onInputChange} /> //onInputChange is a function
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
