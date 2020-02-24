import React from 'react';
import Home from './Home';
import Header from './Header';
import UnderAge from './UnderAge';
import Error404 from './Error404';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
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
            <Route exact path='/KegList' render={()=><KegList kegList={this.state.masterKegList} />} />
            <Route path='/NewKeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
            <Route component={Error404} />
          </Switch>
        </div>
      );
  }
}

export default App;