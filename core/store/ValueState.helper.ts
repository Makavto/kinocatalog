import { ValueState } from "../types/interfaces/ValueState.interface"

export class ValueStateHelper {
  public static modelError<T>(error: string): ValueState<T> {
    return {
      value: null,
      error: error,
    }
  }

  public static modelComplete<T>(model: T): ValueState<T> {
    return {
      value: model,
      error: null,
    }
  }
}