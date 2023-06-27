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

import { DogResponsePagedResult } from '../models/dog-response-paged-result';

@Injectable({
  providedIn: 'root',
})
export class DogService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getDogs
   */
  static readonly GetDogsPath = '/api/Dog';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDogs$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDogs$Plain$Response(params?: {
    Limit?: number;
    Page?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DogResponsePagedResult>> {

    const rb = new RequestBuilder(this.rootUrl, DogService.GetDogsPath, 'get');
    if (params) {
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
        return r as StrictHttpResponse<DogResponsePagedResult>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDogs$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDogs$Plain(params?: {
    Limit?: number;
    Page?: number;
  },
  context?: HttpContext

): Observable<DogResponsePagedResult> {

    return this.getDogs$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DogResponsePagedResult>) => r.body as DogResponsePagedResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDogs$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDogs$Json$Response(params?: {
    Limit?: number;
    Page?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DogResponsePagedResult>> {

    const rb = new RequestBuilder(this.rootUrl, DogService.GetDogsPath, 'get');
    if (params) {
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
        return r as StrictHttpResponse<DogResponsePagedResult>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDogs$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDogs$Json(params?: {
    Limit?: number;
    Page?: number;
  },
  context?: HttpContext

): Observable<DogResponsePagedResult> {

    return this.getDogs$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DogResponsePagedResult>) => r.body as DogResponsePagedResult)
    );
  }

}
