import { useContext } from 'react';
import { GitHubContext } from '../context/GitHubContext';
import { RepoCard } from './RepoCard';
import { SkeletonLoader } from './SkeletonLoader';
import { ErrorState } from './ErrorState';

export function RepoList() {
  const { state } = useContext(GitHubContext);

  if (state.error) {
    return <ErrorState error={state.error} />;
  }

  if (state.isLoading) {
    return <SkeletonLoader count={state.perPage} />;
  }

  if (state.repos.length === 0 && state.query) {
    return <div className="empty-state">No repositories found</div>;
  }

  return (
    <div className="repo-list">
      {state.repos.map(repo => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}