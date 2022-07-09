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
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': '2b8bcf9384mshe27b0afd1ae480fp1edf07jsnb129461cf1ac'
      }

    });

    const data = await response.json();
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