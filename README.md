# Giggle Search

A google search engine clone 

## Technology used
#### React Tailwind-CSS Rapid-APIs

### Develop by 
Bharat Paliwal

Followed YT video by javascript mastery.


# Important Concept used

## Context

https://reactjs.org/docs/context.html

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

share data that can be considered “global” for a tree of React

Use a Provider to pass the current theme to the tree below.
Any component can read it, no matter how deep it is.

 Apply it sparingly because it makes component reuse more difficult.

## useContext

Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.

A component calling useContext will always re-render when the context value changes. If re-rendering the component is expensive, you can optimize it by using memoization.

## Debounce

debounce() function accepts the callback argument function, and returns a debounced version of that function. When the debounced function debouncedCallback gets invoked multiple times, in bursts, it will invoke the callback only after waitTime has passed after the last invocation

https://medium.com/swlh/debouncing-in-react-js-83befe93a5ee