import {Component, OnInit} from '@angular/core';
// @ts-ignore
import { Company } from '.models';
import {CompanyService} from "./company.service";
import {Vacancy} from "./models";
import {VacancyService} from "./vacancy.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hhBackFront';
  companies: Company[]=[];
  newCompany: string = '';
  vacancies : Vacancy[]=[];
  constructor(private companyService: CompanyService) {
  }
  ngOnInit(){
    this.companyService.getCategories().subscribe((companies:Company[])=>{
        this.companies = companies;
    });
  }

  addCompany(){
    this.companyService.createCompany(this.newCompany).subscribe((category:Company)=>{
        this.companies.push(category)
        this.newCompany=''
    });
  }

  deleteCompany(company_id: number) {
    this.companyService.deleteCompany(company_id).subscribe((data: Company) => {
      this.companies = this.companies.filter((company) => company.id !== company_id)
    });
  }
  getVacancies(company_id: number){
    this.companyService.getVacancies(company_id).subscribe((data:Vacancy[])=>{
      console.log(data);
      this.vacancies = data;
    })
  }


}
