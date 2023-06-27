/* tslint:disable */
/* eslint-disable */
import { Dog } from './dog';
export interface DogPagedResult {
  limit?: number;
  page?: number;
  results?: null | Array<Dog>;
  totalResults?: number;
}
