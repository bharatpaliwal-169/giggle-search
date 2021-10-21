import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search';

export default function Navbar( { setDarkTheme,darkTheme}) {
  return (
    <div className="flex flex-wrap p-5 pb-0 
                    sm:justify-between justify-center items-center border-b
                    dark:border-gray-700 border-gray-200"
    >
      <div className="flex justify-between items-center space-x-5 w-screen ">
        <Link to="/">
          <p className="text-3xl  font-bold text-blue-500  py-1 px-2 
            dark:text-blue-200">
            Giggle
          </p>
        </Link>
        <button type="button" onClick={() => setDarkTheme(!darkTheme)} 
          className="text-md dark:bg-gray-50 dark:text-gray-900
          bg-gray-400 text-gray-100 border rounded-full px-2 py-1 hover:shadow-lg">
            {darkTheme ? '💡 Light' : '🌙 Dark'}
        </button>
      </div>
      <Search />
    </div>
  )
}
