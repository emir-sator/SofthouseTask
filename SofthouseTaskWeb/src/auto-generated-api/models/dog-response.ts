/* tslint:disable */
/* eslint-disable */
import { ImageResponse } from './image-response';
import { MeasurementSystemResponse } from './measurement-system-response';
export interface DogResponse {
  bredFor?: null | string;
  breedGroup?: null | string;
  height?: MeasurementSystemResponse;
  id?: number;
  image?: ImageResponse;
  lifeSpan?: null | string;
  name?: null | string;
  origin?: null | string;
  referenceImageId?: null | string;
  temperament?: null | string;
  weight?: MeasurementSystemResponse;
}
