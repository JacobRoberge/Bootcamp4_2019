// JavaScript source code

import React from 'react';

class AddBuilding extends React.Component {
    
    submit() {
        if (this.refs.name.value && this.refs.code.value) {
            const newBuildiBoi = (
                <tr   >
                    <td >{this.refs.code.value} </td>
                    <td > {this.refs.name.value} </td>
                </tr>);
            this.props.newBuldingUpdate(newBuildiBoi);
            this.props.closePopup();
        }
        else {

        }
    }
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <form>
                        <input type="text" placeholder="Type to add name..." ref="name"  />
                    </form>
                    <form>
                        <input  type="text" placeholder="Type to add code..." ref="code" />
                    </form>
                    <p><font color="red">Make sure all of the fields are completed before submitting</font></p>
                    <button onClick={() => this.submit()}>submit</button>

                    <button onClick={this.props.closePopup}>close</button>
                </div>
            </div>
        );
    }
}

export default AddBuilding;
