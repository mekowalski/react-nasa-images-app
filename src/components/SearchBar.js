import React from 'react';

//class-based components because I have to use state at some point
class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' />
        </form>
      </div>
    )
  }
}

export default SearchBar
