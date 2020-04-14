import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Booklist from './Booklist'
import Filter from './Filter'

class App extends Component {
    constructor(props){
      super(props)
      this.state= {
        value: '',
        results:{
          items:[
            {volumeInfo: 
              {
              title: ""}
            }
          ]
          
        } 
      }
    }

componentDidMount() {
  
}    

handleSubmit = (event) => {
//taking the newly added state from the search and starting a fetch
  event.preventDefault();
  fetch('https://www.googleapis.com/books/v1/volumes?q='+this.state.value)
    .then(response => response.json())
      .then(data=> {
        this.setState({
          results : data
        })
        console.log(this.state.results.items[0])
      })
  }

handleChange = (event)=> {
  this.setState({value: event.target.value});
  
}


handleFilter = (event)=> {
  
  this.setState({value: event.target.value});
  
}

  render() {
    return (
      <div className="App">
        Google Book Search
        <Search 
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        state={this.state}
         />
         <Filter 
         results={this.state.results.items}/>
         <Booklist 
         results={this.state.results.items}
         />
      </div>
    );
  }
}

export default App;
