import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import  {Results}  from './components/Result';


export default function Routes() {
  return (
    <div className='p-4'>
      <Switch>
        <Route exact path="/">
          <Redirect to="/search"></Redirect>
        </Route>
        <Route exact path="/search">
          <Results/>
        </Route>
        <Route path="/image">
          <Results/>
        </Route>
        <Route path="/news">
          <Results/>
        </Route>
        <Route path="/videos">
          <Results/>
        </Route>
        
      </Switch>
    </div>
  )
}
