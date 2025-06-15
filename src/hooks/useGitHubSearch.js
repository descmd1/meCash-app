import { useEffect } from 'react';
import { searchRepositories } from '../utils/api';
import { useGitHubContext } from '../context/GitHubContext';

export function useGitHubSearch() {
  const { state, dispatch } = useGitHubContext();

  useEffect(() => {
    const fetchRepos = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_ERROR', payload: null });

      try {
        const { items, total_count } = await searchRepositories({
          query: state.query,
          language: state.language,
          minStars: state.minStars,
          maxStars: state.maxStars,
          license: state.license,
          sort: state.sort,
          order: state.order,
          page: state.page,
          perPage: state.perPage,
        });

        dispatch({ 
          type: 'SET_RESULTS', 
          payload: { 
            repos: items, 
            totalCount: total_count 
          } 
        });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    if (state.query) {
      fetchRepos();
    }
  }, [
    state.query,
    state.language,
    state.minStars,
    state.maxStars,
    state.license,
    state.sort,
    state.order,
    state.page,
    state.perPage,
    dispatch,
  ]);
}