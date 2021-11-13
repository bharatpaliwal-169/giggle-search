import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {useResultContext} from '../Context/StateContextProvider';

import Loading from './Loading';

export default function Result() {

  const {results,isLoading,getResults,searchTerm} = useResultContext();
  const location = useLocation(); // gives types


  useEffect(() => {
    if (searchTerm !== '') {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=50`);
      }
    }
  }, [searchTerm, location.pathname]);


  if(isLoading){
    return <Loading />;
  }
  // console.log(location.pathname);
  console.log(results);
  
  switch (location.pathname) {
    case '/search':
      if(results.length <= 0) {
        return (
          <div className='text-center text-red-500 text-3xl  font-bold'>
            Sorry! No Information Available Currently.

            <div className='text-center text-gray-500 text-sm  py-4 '>
              <ul>
                <li>Please check the spelling of the search term.</li>
                <li>Try Refreshing the page.</li>
              </ul>
            </div>
          </div>
        )
      }
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {results?.results?.map(({link,title,description},index)=>(
              <div key={index} className='w-full md:w-2/5'>
                <a href={link} target="_blank" rel="noreferrer">
                  <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
                </a>
                <p className='text-md dark:text-blue-400 text-gray-800'>{description.length > 50 ? description.substring(0,50): description}</p>
              </div>
          ))}
        </div>
      )
    case '/images':
      if(!results.image_results) {
        return (
          <div className='text-center text-red-500 text-2xl  font-bold'>
            Sorry! No images were found.
          </div>
        )
      }
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.image_results?.map(({ image, link: { href, title } }, index) => (
            <a href={href} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      )
    case '/news':
      if(results.length <= 0) {
        return (
          <div className='text-center text-red-500 text-2xl  font-bold'>
            Sorry! No news were found.
          </div>
        )
      }
      return (
        <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
          {results?.entries?.map(({ id, links, source, title }) => (
            <div key={id} className="md:w-2/5 w-full ">
              <a href={links?.[0].href} target="_blank" rel="noreferrer " className="hover:underline ">
                <p className="text-lg dark:text-blue-300 text-blue-700">{title}</p>
              </a>
              <div className="flex gap-4">
                <a href={source?.href} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-300"> {source?.href}</a>
              </div>
            </div>
          ))}
        </div>
      );
    case '/videos':
      if(results.length <= 0) {
        return (
          <div className='text-center text-red-500 text-2xl  font-bold'>
            Sorry! No videos available currently.
          </div>
        )
      }
      return (
        <div className="flex flex-wrap ">
          {results?.results?.map((video, index) => (
            <div key={index} className="p-2">
              <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />
            </div>
          ))}
        </div>
      );
            
    
    default:
      return 'ERROR'
  }

}
