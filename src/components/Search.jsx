import React,{useState,useEffect} from 'react'
import { useDebounce } from 'use-debounce'
import {useResultContext} from '../context/StateContextProvider.jsx'

export default function Search() {
  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState('Breaking News');
  const [debouncedValue] = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);
  return (
    <div className="relative sm:ml-48 md:ml-96 sm:-mt-10 mt-3 mb-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Giggle or type URL"
        onChange={(e) => setText(e.target.value)}
      />

      {text !== '' && (
        <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500 " onClick={() => setText('')}>
          x
        </button>
      )}
    </div>
  );
};