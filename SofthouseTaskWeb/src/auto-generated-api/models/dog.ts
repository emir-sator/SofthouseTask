/* tslint:disable */
/* eslint-disable */
import { Image } from './image';
import { MeasurementSystem } from './measurement-system';
export interface Dog {
  bredFor?: null | string;
  breedGroup?: null | string;
  height?: MeasurementSystem;
  id?: number;
  image?: Image;
  lifeSpan?: null | string;
  name?: null | string;
  origin?: null | string;
  referenceImageId?: null | string;
  temperament?: null | string;
  weight?: MeasurementSystem;
}
