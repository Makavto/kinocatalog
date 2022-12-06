export const formatRating = (rating: string) => {
  return Math.round(Number(rating) * 10) / 10
}