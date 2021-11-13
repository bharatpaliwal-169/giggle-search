import React,{ createContext,useContext,useState} from 'react';

const ResultContext = createContext();

const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) => {
  const [results , setResults] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [searchTerm,setSearchTerm] = useState('');

  // videos , search , images , news
  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseURL}${type} `,{
      method : 'GET',
      headers: {
        'x-user-agent': 'desktop',
        'x-proxy-location': 'IN',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': 'b0cd484c5emsh8dc88d9f915266fp1e9c4bjsn6a3000d41d73'
      }
    });

    const data = await response.json();
    // console.log(data);
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