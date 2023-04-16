import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import { Company } from '.models';
import {Vacancy} from "./models";
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private client: HttpClient) { }
  BASE_URL = 'http://127.0.0.1:8000'
  // @ts-ignore
  // @ts-ignore
  getCategories() : Observable<Company[]>{
    // @ts-ignore
    return this.client.get<Company[]>(`${this.BASE_URL}/api/companies/`)
  }

  // @ts-ignore
  createCompany(companyName: string) : Observable<Company>{
    return this.client.post<Company>(`${this.BASE_URL}/api/companies/`,{name:companyName})
  }

  deleteCompany(company_id: number) : Observable<any>{
    return this.client.delete(`${this.BASE_URL}/api/companies/${company_id}`);
  }

  getVacancies(company_id: number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${company_id}/vacancies`)
  }
}
