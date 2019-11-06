// JavaScript source code

import React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
class AddBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boolie: false
            


        };
    }
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
            this.setState({
                boolie: true
            })
            console.log("fuck");
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
                    <Container className="p-3">

                    <Button variant="primary" size="lg" onClick={() => this.submit()}>submit</Button>
                        <Button variant="primary" size="lg" onClick={this.props.closePopup}>close</Button>
                    </Container>
                    <Alert show={this.state.boolie} variant='danger'>
                        <div class="centered">

Make sure all of the fields are completed before submitting                  </div>

                    </Alert>
                    
                    

                </div>
            </div>
        );
    }
}

export default AddBuilding;
