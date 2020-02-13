import React from 'react';
import Header from './Header';
// import TicketList from './TicketList';
// import MarketScheduleList from './MarketScheduleList';
// import SeasonalProduceList from './SeasonalProduceList';
import { Switch, Route } from 'react-router-dom';
import NewMarketScheduleForm from './NewMarketScheduleForm';
// import NavBar from './NavBar';
import Background from './Background';

function App(){
  return (
    <div>
      <Header/>
      {/* <NavBar/> */}
      <Switch>
        {/* <Route exact path='/' component={MarketScheduleList} /> */}
        <Route path='/newmarketscheduleform' component={NewMarketScheduleForm} />
      </Switch>
      <Background/>
    </div>
  );
}

export default App;

