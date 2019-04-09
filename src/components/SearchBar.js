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
//user types in input
//callback it invoked
//setState is called/updated with the new value the user typed in searchbar
//component re-renders the instant the user types something
//take value of input(this.state.term), assign it to value prop, overwriting whatever text is inside input
