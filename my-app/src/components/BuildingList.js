import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class BuilingList extends React.Component {
    state = { render: false }
    delete(idd){
        this.setState({ render: !this.state.render })
        this.identi = idd;
    }
   
    updateDataV2(datar) {
        this.dataV2 = datar;
    }
	render() {
        const { data, filterText, newBuildings} = this.props;
        this.dataV2 = data;
        const buildingList = this.dataV2.filter(name => {
            return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        }).filter(building => {
            this.boolie = true;
            this.props.deletedBuildings.forEach(element => {
                if (building.code === element) {

                    this.boolie = false;
                }
            })
           
            return this.boolie
        }).map(directory => {
            return (

                <tr key={directory.id} onClick={() => this.props.selectedUpdate(directory.id)} >
                    <td >{directory.code} </td>
                    <td > {directory.name} </td>
                    

                </tr>
			);
		});

        return <div>{newBuildings}{buildingList}</div>;
	}
}
export default BuilingList;
