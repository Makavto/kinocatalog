export interface ValueState<T> {
  value: T | null;
  error: string | null;
  loading?: boolean
}