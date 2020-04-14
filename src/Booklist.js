import React, { Component } from 'react';


class Booklist extends Component {

//setting up form to take input from user with value props and onChange/onSubmit event handling
  render() {
    let list = this.props.results.map((item, index)=>{
        return(
            <li key ={index}>
                {item.volumeInfo.title}    
            </li>
        )
      
    })
    
 

    return (
        <div>
            <ul>
             {list}  
            </ul>
        </div>
    
    );
  }
}

export default Booklist;
