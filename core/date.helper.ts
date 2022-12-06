import { MONTHS } from "./constants"

export class DateHelper {
  public static getYearForRequest() {
    return new Date().getFullYear()
  }

  public static getMonthForRequest() {
    return MONTHS[new Date().getMonth() - 1]
  }
}