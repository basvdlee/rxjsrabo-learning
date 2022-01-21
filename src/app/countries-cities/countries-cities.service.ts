import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import * as countriesCitiesData from '../../assets/json/countries-cities-data.json'

interface CountriesCities {
  [key: string]: string[]
}

@Injectable({
  providedIn: 'root'
})
export class CountriesCitiesService {
  constructor() {}

  getAllCountries(): Observable<string[]> {
    return of(countriesCitiesData).pipe(
      map((countriesCities: CountriesCities) => Object.keys(countriesCities))
    )
  }

  getCitiesForCountry(countryName: string): Observable<string[]> {
    return of(countriesCitiesData).pipe(
      map((countriesCities: CountriesCities) => countriesCities[countryName])
    )
  }
}
