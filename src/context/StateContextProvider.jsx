import React,{ createContext,useContext,useState} from 'react';

const ResultContext = createContext();

export const ResultContextProvider = ({children}) => {
  const [results , setResults] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [searchTerm,setSearchTerm] = useState('');

  const getResults = async (query) => {
    setIsLoading(true);

    const response = await fetch(`https://google-search74.p.rapidapi.com/?query=${query}&limit=30&related_keywords=true`,{
      method : 'GET',
      headers: {
          'x-user-agent': 'desktop',
          'x-rapidapi-host': 'google-search74.p.rapidapi.com',
          'x-rapidapi-key': '3cc9c479camsh1e42665e8def39dp162b11jsn2fa01a7ff598'
        },
    });

    const data = await response.json();
    console.log(data);
    setResults(data);
    setIsLoading(false);

  }


  return (
    <ResultContext.Provider value = {{getResults,results,searchTerm,setSearchTerm,isLoading}}>
      {children}
    </ResultContext.Provider>
  )
}
export const useResultContext = () => useContext(ResultContext);