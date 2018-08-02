import { Injectable } from '@angular/core';
import { GeoCoordinate } from "./geo-coordinate";

@Injectable()
export class GeoDistanceService {

  private _earthRadiusInMeters: number = 6378137;
  private _earthRadiusInKilometers: number = 6371;
  private _earthRadiusInMiles: number = 3960;

  //Convert to radians
  private _toRadians(value: number): number {
    return value * Math.PI / 180;
  }

  constructor() { }

  private _getDistance(coord1: GeoCoordinate, coord2: GeoCoordinate): number {
    let φ1 = this._toRadians(coord1.latitude);
    let φ2 = this._toRadians(coord2.latitude);
    let Δφ = this._toRadians(coord2.latitude - coord1.latitude);
    let Δλ = this._toRadians(coord2.longitude - coord1.longitude);
    // a = sin²(Δφ / 2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ / 2)
    let a = Math.pow(Math.sin(Δφ / 2), 2) +
      Math.cos(φ1) *
      Math.cos(φ2) *
      Math.pow(Math.sin(Δλ / 2), 2);
    // c = 2 ⋅ atan2(√a, √(1−a))
    return 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  getDistanceInMeters(coord1: GeoCoordinate, coord2: GeoCoordinate): number {
    let c = this._getDistance(coord1, coord2);
    // d = R ⋅ c
    return this._earthRadiusInMeters * c;
  }

  getDistanceInKilometers(coord1: GeoCoordinate, coord2: GeoCoordinate): number {
    let c = this._getDistance(coord1, coord2);
    // d = R ⋅ c
    return this._earthRadiusInKilometers * c;
  }

  getDistanceInMiles(coord1: GeoCoordinate, coord2: GeoCoordinate): number {
    let c = this._getDistance(coord1, coord2);
    // d = R ⋅ c
    return this._earthRadiusInMiles * c;
  }
  getPoint(distance: number) {
    if (distance <= 2) {
      return 10;
    }
    if (distance > 2 && distance <= 3) {
      return 8;
    }if(distance > 3 && distance <= 4){
    return 5
    }
    if (distance > 4) {
      return 1;
    }
  }

  developers() {
    return 'Hanna Adugna Mahlet Girma';

  }
}

