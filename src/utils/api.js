export async function searchRepositories(params) {
  const {
    query,
    language,
    minStars,
    maxStars,
    license,
    sort,
    order,
    page,
    perPage,
  } = params;

  let q = query;
  if (language) q += `+language:${language}`;
  if (minStars) q += `+stars:>=${minStars}`;
  if (maxStars) q += `+stars:<=${maxStars}`;
  if (license) q += `+license:${license}`;

  const url = new URL('https://api.github.com/search/repositories');
  url.searchParams.append('q', q);
  if (sort) url.searchParams.append('sort', sort);
  if (order) url.searchParams.append('order', order);
  if (page) url.searchParams.append('page', page);
  if (perPage) url.searchParams.append('per_page', perPage);

  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to fetch repositories');
  }

  return response.json();
}