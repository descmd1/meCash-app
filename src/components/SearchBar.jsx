import { useState, useEffect, useContext } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { GitHubContext } from '../context/GitHubContext';
import { useGitHubContext } from '../context/GitHubContext';
import '../styles/searchbar.css'

export function SearchBar() {
  // const { dispatch } = useContext(GitHubContext);
  const [inputValue, setInputValue] = useState('');
  const debouncedQuery = useDebounce(inputValue, 500);
  const { state, dispatch } = useGitHubContext();

  useEffect(() => {
    if (debouncedQuery) {
      dispatch({ type: 'SET_QUERY', payload: debouncedQuery });
    }
  }, [debouncedQuery, dispatch]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search GitHub repositories..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}