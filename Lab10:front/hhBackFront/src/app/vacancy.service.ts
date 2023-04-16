import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import { Vacancy } from '.models';
@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private client :HttpClient) { }
  BASE_URL = 'http://127.0.0.1:8000'

  // @ts-ignore
  getVacancies(company_id: number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${company_id}/vacancies`)
  }
}
