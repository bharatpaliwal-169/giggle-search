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
        'x-rapidapi-key': 'a7a04f94f4msh9d2fefb9c5b8378p1daba8jsne698d222e2fd'
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