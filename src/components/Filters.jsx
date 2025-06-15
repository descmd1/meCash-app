import { useContext } from 'react';
import { GitHubContext } from '../context/GitHubContext';
import { LANGUAGES, LICENSES, STAR_RANGES } from '../utils/constants';
import '../styles/filters.css'

export function Filters() {
  const { state, dispatch } = useContext(GitHubContext);

  const handleLanguageChange = (e) => {
    dispatch({ type: 'SET_LANGUAGE', payload: e.target.value || null });
  };

  const handleStarsChange = (e) => {
    const range = STAR_RANGES.find(r => r.label === e.target.value);
    dispatch({ 
      type: 'SET_STARS_RANGE', 
      payload: { 
        min: range?.min || null, 
        max: range?.max || null 
      } 
    });
  };

  const handleLicenseChange = (e) => {
    dispatch({ type: 'SET_LICENSE', payload: e.target.value || null });
  };

  const resetFilters = () => {
    dispatch({ type: 'RESET_FILTERS' });
  };

  return (
    <div className="filters">
      <div className="filter-group">
        <label>Language:</label>
        <select value={state.language || ''} onChange={handleLanguageChange}>
          <option value="">All</option>
          {LANGUAGES.map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Stars:</label>
        <select 
          value={
            STAR_RANGES.find(r => 
              r.min === state.minStars && r.max === state.maxStars
            )?.label || ''
          } 
          onChange={handleStarsChange}
        >
          <option value="">All</option>
          {STAR_RANGES.map(range => (
            <option key={range.label} value={range.label}>{range.label}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>License:</label>
        <select value={state.license || ''} onChange={handleLicenseChange}>
          <option value="">All</option>
          {LICENSES.map(license => (
            <option key={license} value={license}>{license}</option>
          ))}
        </select>
      </div>

      <button onClick={resetFilters}>Reset Filters</button>
    </div>
  );
}