/* tslint:disable */
/* eslint-disable */
import { DogResponse } from './dog-response';
export interface DogResponsePagedResult {
  limit?: number;
  page?: number;
  results?: null | Array<DogResponse>;
  totalResults?: number;
}
