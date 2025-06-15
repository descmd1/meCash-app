import '../styles/loading.css'

export function SkeletonLoader({ count }) {
  return (
    <div className="skeleton-loader">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton-title"></div>
          <div className="skeleton-description"></div>
          <div className="skeleton-meta">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ))}
    </div>
  );
}