import { GitHubProvider } from './context/GitHubContext';
import { SearchBar } from './components/SearchBar';
import { Filters } from './components/Filters';
import { SortOptions } from './components/SortOptions';
import { RepoList } from './components/RepoList';
import { Pagination } from './components/Pagination';
import { useGitHubSearch } from './hooks/useGitHubSearch';
import './App.css'

function App() {
  return (
    <GitHubProvider>
      <GitHubExplorer />
    </GitHubProvider>
  );
}

function GitHubExplorer() {
  useGitHubSearch();

  return (
    <div className="github-explorer">
      <h1>GitHub Repository Explorer</h1>
      
      <div className="search-container">
        <SearchBar />
      </div>
      
      <div className="controls">
        <Filters />
        <SortOptions />
      </div>
      
      <RepoList />
      
      <Pagination />
    </div>
  );
}

export default App;