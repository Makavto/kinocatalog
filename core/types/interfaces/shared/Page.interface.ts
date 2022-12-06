export interface Page<T> {
  items: T[],
  page: number;
  pagesCount: number
}