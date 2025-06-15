import { createContext, useContext, useReducer, useMemo, useEffect } from 'react'; 

const initialState = {
  query: 'react',
  language: null,
  minStars: null,
  maxStars: null,
  license: null,
  sort: 'stars',
  order: 'desc',
  page: 1,
  perPage: 10,
  repos: [],
  totalCount: 0,
  isLoading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, query: action.payload, page: 1 };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload, page: 1 };
    case 'SET_STARS_RANGE':
      return { 
        ...state, 
        minStars: action.payload.min, 
        maxStars: action.payload.max,
        page: 1,
      };
    case 'SET_LICENSE':
      return { ...state, license: action.payload, page: 1 };
    case 'SET_SORT':
      return { ...state, sort: action.payload.sort, order: action.payload.order, page: 1 };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_RESULTS':
      return { ...state, repos: action.payload.repos, totalCount: action.payload.totalCount };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'RESET_FILTERS':
      return { ...initialState, query: state.query };
    default:
      return state;
  }
}

export const GitHubContext = createContext();

export function GitHubProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  // In GitHubContext.js
useEffect(() => {
  // Read from URL on initial load
  const params = new URLSearchParams(window.location.search);
  const initialStateFromURL = {
    query: params.get('q') || initialState.query,
    language: params.get('language') || initialState.language,
    // ... other params
  };
  dispatch({ type: 'INIT_STATE', payload: initialStateFromURL });
}, []);

useEffect(() => {
  // Update URL when state changes
  const params = new URLSearchParams();
  if (state.query) params.set('q', state.query);
  if (state.language) params.set('language', state.language);
  // ... other params
  
  window.history.pushState({}, '', `?${params.toString()}`);
}, [state]);

  return (
    <GitHubContext.Provider value={value}>
      {children}
    </GitHubContext.Provider>
  );
}

// Add this custom hook for consuming the context
export function useGitHubContext() {
  const context = useContext(GitHubContext);
  if (context === undefined) {
    throw new Error('useGitHubContext must be used within a GitHubProvider');
  }
  return context;
}