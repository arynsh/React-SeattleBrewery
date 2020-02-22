import React from 'react';
import Home from './Home';
import Header from './Header';
import UnderAge from './UnderAge';
import KegList from './KegList';
import AddNewKegForm from './AddNewKegForm';
// import AddNewKeg from './AddNewKegControl';
// import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
      return (
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/UnderAge' component={UnderAge} />
            <Route path='/AddNewKegForm' render={()=><AddNewKegForm onAddNewKegCreation={this.handleAddingAddNewKegToList} />} />
            <Route exact path='/KegList' render={()=><KegList KegList={this.state.masterKegList} />}  />
            {/* <Route path='/admin' render={()=><Admin KegList={this.state.masterKegList} />} /> */}
            {/* <Route component={Error404} /> */}
          </Switch>
        </div>
      );
  }
}

export default App;