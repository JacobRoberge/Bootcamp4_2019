// JavaScript source code
import React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

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
                    
                    
                    <Container className="p-3">

                        <Button variant="primary" size="lg" onClick={() => this.submit()}>submit</Button>
                        <Button variant="primary" size="lg" onClick={this.props.closePopup}>close</Button>
                    </Container>
                </div>
            </div>
        );
    }
}

export default RemoveBuilding;