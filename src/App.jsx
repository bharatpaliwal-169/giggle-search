import React,{useState} from 'react';

import  Footer  from './components/Footer';
// import  Navbar  from './components/Navbar';
import  Routes  from './AppRoutes';

const Navbar = React.lazy(() => import('./components/Navbar'));


const App = () => {
  const [darkTheme , setDarkTheme] = useState(false);
  return (
    <div className = {darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <React.Suspense fallback={<div>Loading... </div>}>
          <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        </React.Suspense>

        <Routes />
        <React.Suspense fallback={<div>Loading... </div>}>
          <Footer />
        </React.Suspense>
      </div>
    </div>
  )
}

export default App;