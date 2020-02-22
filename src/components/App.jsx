import React from 'react';
import Home from './Home';
import Header from './Header';
import UnderAge from './UnderAge';
import BeerList from './BeerList';
import AddNewKeg from './AddNewKeg';
// import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/UnderAge' component={UnderAge} />
        <Route exact path='/AddNewKeg' component={AddNewKeg} />
        <Route exact path='/BeerList' component={BeerList} />
        {/* <Route path='/admin' render={()=><Admin ticketList={this.state.masterTicketList} />} /> */}
        {/* <Route component={Error404} /> */}
      </Switch>
    </div>
  );
}

export default App;