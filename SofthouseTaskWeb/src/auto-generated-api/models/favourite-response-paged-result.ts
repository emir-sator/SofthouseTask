/* tslint:disable */
/* eslint-disable */
import { FavouriteResponse } from './favourite-response';
export interface FavouriteResponsePagedResult {
  limit?: number;
  page?: number;
  results?: null | Array<FavouriteResponse>;
  totalResults?: number;
}
