import React, { Component } from 'react';


class Filter extends Component {


changeSelection(value) {
    if(value === "None") {
        this.props.changeHandler(null);
        } else {
            // find the country selected
            const country = this.props.results.find(country => country.name === value);
            this.props.changeHandler(country);
        }
    }

render() {

    return (
        <div>
            <form>
                <label htmlFor="filter">Print Type</label>
                <select id="type" name="print type" onChange={e => this.changeSelection(e.target.value)}>
                <option value="None">Filter by..</option>
                <option value= 'book'>Book</option>
                <option value= 'ebook'>E-Book</option>
                </select>
            </form>
        </div>
    
    );
  }
}

export default Filter;
