import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
        addBuilding: false,
        deleteBuilding: false,

        newBuildings: [],
       deletedBuildings: []


    };
  }

    filterUpdate(value) {
        this.setState({
            filterText: value
        })
    //Here you will need to set the filterText property of state to the value passed into this function
  }

    selectedUpdate(id) {
        this.setState({
            selectedBuilding: id
        })
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    }
    togglePopup() {
        this.setState({
            addBuilding: !this.state.addBuilding
        });
    }  
    togglePopupDelete() {
        this.setState({
            deleteBuilding: !this.state.deleteBuilding
        });
    }  
    newBuldingUpdate(newBuilding) {
        const list = this.state.newBuildings.concat([newBuilding])
        this.setState({
            newBuildings: list
        })
    }
    deleteUpdate(deletedCode) {
        const list = this.state.deletedBuildings.concat([deletedCode])
        this.setState({
            deletedBuildings: list
        })
    }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
            <button onClick={this.togglePopup.bind(this)}> Click To add a building</button>  
            <button onClick={this.togglePopupDelete.bind(this)}> Click To delete a building</button>  

            <Search filterUpdate={this.filterUpdate.bind(this)} />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                                        <b>Code Building</b>
                                        
                    </td>
                  </tr>
                  <BuildingList
                                    data={this.props.data}
                                    filterText={this.state.filterText}
                                    selectedUpdate={this.selectedUpdate.bind(this)}
                                    newBuildings={this.state.newBuildings}
                                    deletedBuildings={this.state.deletedBuildings}

                  />
                </table>
              </div>
            </div>
            <div className="column2">
                        <ViewBuilding
                            selectedBuilding={this.state.selectedBuilding}
                            data={this.props.data}
                        />
                    </div>
                    {this.state.addBuilding ?
                        <AddBuilding
                            newBuldingUpdate={this.newBuldingUpdate.bind(this)}

                            closePopup={this.togglePopup.bind(this)}
                        />
                        : null
                    } 
                    {this.state.deleteBuilding ?
                        <RemoveBuilding
                            deleteUpdate={this.deleteUpdate.bind(this)}

                            closePopup={this.togglePopupDelete.bind(this)}
                        />
                        : null
                    }
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
