import { BiFork, BiStar } from 'react-icons/bi';
import '../styles/repocard.css';
import { FaCalendar, FaLanguage } from 'react-icons/fa6';

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
        <span><BiStar size={16} color='gold'/> {repo.stargazers_count.toLocaleString()}</span>
        <span><BiFork size={16} /> {repo.forks_count.toLocaleString()}</span>
        <span><FaLanguage size={16}/> {repo.language || 'Unknown'}</span>
        <span><FaCalendar size={16} color='purple'/> {new Date(repo.updated_at).toLocaleDateString()}</span>
      </div>
    </div>
  );
}