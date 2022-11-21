export interface ValueState<T> {
  value: T;
  loading: boolean;
  error: string | null
}