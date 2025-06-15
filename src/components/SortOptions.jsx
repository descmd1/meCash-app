import { useContext } from 'react';
import { GitHubContext } from '../context/GitHubContext';
import '../styles/sort.css';

export function SortOptions() {
  const { state, dispatch } = useContext(GitHubContext);

  const handleSortChange = (e) => {
    const [sort, order] = e.target.value.split('-');
    dispatch({ type: 'SET_SORT', payload: { sort, order } });
  };

  const currentSort = `${state.sort}-${state.order}`;

  return (
    <div className="sort-options">
      <label>Sort by:</label>
      <select value={currentSort} onChange={handleSortChange}>
        <option value="stars-desc">Stars (Descending)</option>
        <option value="stars-asc">Stars (Ascending)</option>
        <option value="forks-desc">Forks (Descending)</option>
        <option value="forks-asc">Forks (Ascending)</option>
        <option value="updated-desc">Updated (Recent first)</option>
        <option value="updated-asc">Updated (Oldest first)</option>
      </select>
    </div>
  );
}