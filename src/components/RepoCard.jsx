import '../styles/repocard.css';

export function RepoCard({ repo }) {
  return (
    <div className="repo-card">
      <h3>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.full_name}
        </a>
      </h3>
      <p>{repo.description}</p>
      <div className="repo-meta">
        <span>⭐ {repo.stargazers_count.toLocaleString()}</span>
        <span>🍴 {repo.forks_count.toLocaleString()}</span>
        <span>📝 {repo.language || 'Unknown'}</span>
        <span>📅 {new Date(repo.updated_at).toLocaleDateString()}</span>
      </div>
    </div>
  );
}