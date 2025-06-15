import { useContext } from 'react';
import { GitHubContext } from '../context/GitHubContext';
import '../styles/pagination.css'

export function Pagination() {
  const { state, dispatch } = useContext(GitHubContext);
  const totalPages = Math.ceil(state.totalCount / state.perPage);

  if (totalPages <= 1) return null;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      dispatch({ type: 'SET_PAGE', payload: page });
    }
  };

  return (
    <div className="pagination">
      <button 
        onClick={() => handlePageChange(state.page - 1)}
        disabled={state.page === 1}
      >
        Previous
      </button>
      
      {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
        let pageNum;
        if (totalPages <= 5) {
          pageNum = i + 1;
        } else if (state.page <= 3) {
          pageNum = i + 1;
        } else if (state.page >= totalPages - 2) {
          pageNum = totalPages - 4 + i;
        } else {
          pageNum = state.page - 2 + i;
        }
        
        return (
          <button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={state.page === pageNum ? 'active' : ''}
          >
            {pageNum}
          </button>
        );
      })}
      
      <button 
        onClick={() => handlePageChange(state.page + 1)}
        disabled={state.page === totalPages}
      >
        Next
      </button>
    </div>
  );
}