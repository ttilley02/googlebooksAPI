import React, { Component } from 'react';


class Search extends Component {

//setting up form to take input from user with value props and onChange/onSubmit event handling
  render() {
    return (
        <div>
            <form onSubmit={this.props.handleSubmit}>
            <label>
            <input type="text" value={this.props.state.value} onChange={this.props.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
    
    );
  }
}

export default Search;
