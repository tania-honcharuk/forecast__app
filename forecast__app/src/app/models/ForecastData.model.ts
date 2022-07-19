import { ForecastDetails } from './ForecastDetails.model'

export class ForecastData {
  public name!: string
  public details: Array<ForecastDetails> = new Array<ForecastDetails>();
}