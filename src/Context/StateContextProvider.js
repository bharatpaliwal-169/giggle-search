import React,{ createContext,useContext,useState} from 'react';

const ResultContext = createContext();

// const baseURL = 'https://google-search74.p.rapidapi.com/';
// https://google-search74.p.rapidapi.com/?query=Nike&limit=10&related_keywords=true

export const ResultContextProvider = ({children}) => {
  const [results , setResults] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [searchTerm,setSearchTerm] = useState('');

  // videos , search , images , news
  const getResults = async (query) => {
    setIsLoading(true);
    // const response = () => {}
    const response = await fetch(`https://google-search74.p.rapidapi.com/?query=${query}&limit=50&related_keywords=true`,{
      method : 'GET',
      headers: {
          'x-user-agent': 'desktop',
          'x-rapidapi-host': 'google-search74.p.rapidapi.com',
          'x-rapidapi-key': '3cc9c479camsh1e42665e8def39dp162b11jsn2fa01a7ff598'
        },
      params:query
    });
    // console.log(type);
    const data = await response.json();
    // const data = {};
    console.log(data);
    setResults(data);
    setIsLoading(false);

  }


  return (
    <ResultContext.Provider value = {{getResults,
      results,searchTerm,setSearchTerm,isLoading
    }} >
      {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext);
