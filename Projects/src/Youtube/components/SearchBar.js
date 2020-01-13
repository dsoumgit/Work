import React, { Component } from 'react'; 

class SearchBar extends Component {

    state = {
        term: ''
    }

    onInputChange = (event) => {
        // update state 
        this.setState({ term: event.target.value }); 
    }

    // form submit 
    onFormSubmit = (event) => {
        // prevent 
        event.preventDefault(); 

        // callback from parent component
        // get props from parent component and pass in search term back to parent component 
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Name</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange} placeholder="Search..." />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar; 