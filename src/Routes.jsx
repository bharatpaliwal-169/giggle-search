import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import  Result  from './components/Result';


export default function Routes() {
  return (
    <div className='p-4'>
      <Switch>
        <Route exact path="/">
          <Redirect to="/search"></Redirect>
        </Route>
        <Route exact path="/search">
          <Result/>
        </Route>
        <Route path="/image">
          <Result/>
        </Route>
        <Route path="/news">
          <Result/>
        </Route>
        <Route path="/videos">
          <Result/>
        </Route>
        
      </Switch>
    </div>
  )
}
