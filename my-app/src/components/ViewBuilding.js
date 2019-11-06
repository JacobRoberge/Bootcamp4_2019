import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
class ViewBuilding extends React.Component {

    

    render() {
        const { selectedBuilding, data } = this.props;
        var blah;
     
        
        if (selectedBuilding == 0) {
            blah = <i>Click on a name to view more information...</i>;

        }
        else {
            var concaObject = [];

            const selectedBoi = data.find(e => e.id == selectedBuilding)

            Object.keys(selectedBoi).map((key) => {
                if (key == "coordinates") {
                    concaObject.push(<ListGroup.Item variant='primary'><text className="whiteSpaceNoWrap">latitude: </text><text className="whiteSpaceNoWrap">{selectedBoi[key].latitude}</text></ListGroup.Item>)
                    concaObject.push(<ListGroup.Item variant='primary'><text className="whiteSpaceNoWrap">longitude: </text><text className="whiteSpaceNoWrap">{selectedBoi[key].longitude}</text></ListGroup.Item>)


                }
                else {
                    concaObject.push(<ListGroup.Item variant='primary'><text className="whiteSpaceNoWrap">{key}</text><text className="whiteSpaceNoWrap">: </text><text className="whiteSpaceNoWrap">{selectedBoi[key]}</text></ListGroup.Item>)

                    
                }
            })
            blah = <ListGroup>
                {concaObject}
                </ListGroup>;

        }
        return (
            
            <div>
                <p>
                    {blah}
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
