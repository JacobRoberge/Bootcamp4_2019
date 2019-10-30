import React from 'react';

class Search extends React.Component {
    filterUpdate() {
        const val = this.myvalue.value;
        this.props.filterUpdate(val);
		//Here you will need to update the value of the filter with the value from the textbox
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		
		return (
			<form>
                <input type="text" placeholder="Type to Filter" onChange={this.filterUpdate.bind(this)} ref={(value) => { this.myvalue = value }}/>
			</form>
		);
	}
}
export default Search;
