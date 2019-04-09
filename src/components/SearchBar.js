import React from 'react';

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value)
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Search NASA Images </label>
            <input
              type='text'
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar

{
  //When passing a callback, DO NOT end with ()
  //Leave () off, to pass reference to function to input element
  //input can call that function as SOME TIME in the future
}
