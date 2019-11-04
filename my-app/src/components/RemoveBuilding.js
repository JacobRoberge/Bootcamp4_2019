// JavaScript source code
import React from 'react';

class RemoveBuilding extends React.Component {
    submit() {
        this.props.deleteUpdate(this.refs.code.value)
        this.props.closePopup();

    }
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <form>
                        <input type="text" placeholder="Type code of entry you want to delete" ref="code" />
                    </form>
                    
                    <button onClick={() => this.submit()}>submit</button>

                    <button onClick={this.props.closePopup}>close</button>
                </div>
            </div>
        );
    }
}

export default RemoveBuilding;