import '../styles/loading.css'

export function ErrorState({ error }) {
  return (
    <div className="error-state">
      <h3>Error loading repositories</h3>
      <p>{error}</p>
      <p>Please try again later.</p>
    </div>
  );
}