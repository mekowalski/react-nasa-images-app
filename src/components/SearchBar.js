import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Search NASA Images </label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar

//onChange: everytime a user types inside the input, the state will update, the term property with the value
//on input, new prop value set to this.state.term
