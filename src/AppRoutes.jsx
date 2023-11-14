import React from 'react';
import {Routes,Route,
  // Redirect
} from 'react-router-dom';
import Results  from './components/Results';


export default function AppRoutes() {
  return (
    <div className='p-4'>
      <Routes>
        <Route exact path="/" Component={Results} />
      </Routes>
    </div>
  )
}
