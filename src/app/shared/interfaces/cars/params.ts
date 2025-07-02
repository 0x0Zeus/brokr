import { ICar } from '@shared/models/cars';

export interface ICarsSearchParams {
  fromDate: string;
  fromTime: string;
  untilDate: string;
  untilTime: string;
  longitude: number;
  latitude: number;
}

export interface ICarDetailsParams {
  vehicleId: string;
  searchKey: string;
}

export interface ICarsInfoData {
  cars: ICar[];
  totalCount: number;
}
