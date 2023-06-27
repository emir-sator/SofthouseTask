/* tslint:disable */
/* eslint-disable */
import { Favourite } from './favourite';
export interface FavouritePagedResult {
  limit?: number;
  page?: number;
  results?: null | Array<Favourite>;
  totalResults?: number;
}
