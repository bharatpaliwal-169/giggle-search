import React,{useEffect} from 'react'

import {useResultContext} from '../context/StateContextProvider.jsx';

import Loading from './Loading';


const Results = () => {
  const {results,isLoading,getResults,searchTerm} = useResultContext();


  useEffect(() => {
    if (searchTerm !== '') {
      getResults(searchTerm);
    }
  }, [searchTerm]);
  
  if(isLoading){
    return <Loading />;
  }

  return (
    <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
      {results?.results?.map(({url,title,description,position})=>(
          <div key={position} className='w-full md:w-2/5 border-lg rounded-lg shadow-lg dark:shadow-md dark:shadow-blue-700 p-5'>
            <a href={url} target="_blank" rel="noreferrer">
              {/* <p className="text-sm">{url.length > 30 ? url.substring(0, 30) : url}</p> */}
              <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
            </a>
            <p className='text-md dark:text-blue-400 text-gray-800'>{description.length > 180 ? description.substring(0,50): description}</p>
          </div>
      ))}
    </div>
  )
}

export default Results;