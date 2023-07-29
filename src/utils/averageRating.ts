export function formatAverageRatingFromApi(rating: string) {
  return Number((Number(rating) / 10).toFixed(2));
}
