/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddFavoriteImageRequest } from '../models/add-favorite-image-request';
import { FavouriteResponsePagedResult } from '../models/favourite-response-paged-result';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getFavourites
   */
  static readonly GetFavouritesPath = '/api/Favourite';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFavourites$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFavourites$Plain$Response(params?: {
    SubId?: string;
    Order?: string;
    Size?: string;
    Limit?: number;
    Page?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<FavouriteResponsePagedResult>> {

    const rb = new RequestBuilder(this.rootUrl, FavouriteService.GetFavouritesPath, 'get');
    if (params) {
      rb.query('SubId', params.SubId, {});
      rb.query('Order', params.Order, {});
      rb.query('Size', params.Size, {});
      rb.query('Limit', params.Limit, {});
      rb.query('Page', params.Page, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FavouriteResponsePagedResult>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFavourites$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFavourites$Plain(params?: {
    SubId?: string;
    Order?: string;
    Size?: string;
    Limit?: number;
    Page?: number;
  },
  context?: HttpContext

): Observable<FavouriteResponsePagedResult> {

    return this.getFavourites$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<FavouriteResponsePagedResult>) => r.body as FavouriteResponsePagedResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFavourites$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFavourites$Json$Response(params?: {
    SubId?: string;
    Order?: string;
    Size?: string;
    Limit?: number;
    Page?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<FavouriteResponsePagedResult>> {

    const rb = new RequestBuilder(this.rootUrl, FavouriteService.GetFavouritesPath, 'get');
    if (params) {
      rb.query('SubId', params.SubId, {});
      rb.query('Order', params.Order, {});
      rb.query('Size', params.Size, {});
      rb.query('Limit', params.Limit, {});
      rb.query('Page', params.Page, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FavouriteResponsePagedResult>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFavourites$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFavourites$Json(params?: {
    SubId?: string;
    Order?: string;
    Size?: string;
    Limit?: number;
    Page?: number;
  },
  context?: HttpContext

): Observable<FavouriteResponsePagedResult> {

    return this.getFavourites$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<FavouriteResponsePagedResult>) => r.body as FavouriteResponsePagedResult)
    );
  }

  /**
   * Path part for operation addFavorite
   */
  static readonly AddFavoritePath = '/api/Favourite';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addFavorite$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  addFavorite$Plain$Response(params?: {
    body?: AddFavoriteImageRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, FavouriteService.AddFavoritePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addFavorite$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  addFavorite$Plain(params?: {
    body?: AddFavoriteImageRequest
  },
  context?: HttpContext

): Observable<number> {

    return this.addFavorite$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addFavorite$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  addFavorite$Json$Response(params?: {
    body?: AddFavoriteImageRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, FavouriteService.AddFavoritePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addFavorite$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  addFavorite$Json(params?: {
    body?: AddFavoriteImageRequest
  },
  context?: HttpContext

): Observable<number> {

    return this.addFavorite$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation removeFromFavorites
   */
  static readonly RemoveFromFavoritesPath = '/api/Favourite';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeFromFavorites$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeFromFavorites$Plain$Response(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, FavouriteService.RemoveFromFavoritesPath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `removeFromFavorites$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeFromFavorites$Plain(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.removeFromFavorites$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeFromFavorites$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeFromFavorites$Json$Response(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, FavouriteService.RemoveFromFavoritesPath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `removeFromFavorites$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeFromFavorites$Json(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.removeFromFavorites$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
