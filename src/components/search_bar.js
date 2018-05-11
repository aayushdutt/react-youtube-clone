// import React from 'react';
import React, {Component} from 'react';
//pull off React.Component and store it into a variable named Component

// const SearchBar = () => {
//     return <input />;
// };

// Class method for components
// class SearchBar extends React.Component {
class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: '' };
    }

    render() { 
       return  (
        <div className="search-bar">
            <input 
                onChange={event => this.onInputChange(event.target.value)}
                value={this.state.term} 
            />
        </div>
       )
    //when onChange runs, the value doesn't really change!
    }


    onInputChange(term) {
        this.props.onSearchTermChange(term);
        this.setState({term})
    }
}

export default SearchBar;
