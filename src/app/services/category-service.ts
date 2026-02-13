import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CategoryModel } from '../models/categoryModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private http = inject(HttpClient);
  apiUrl="https://localhost:7000/api/categories"

  getAll(){
    return this.http.get<CategoryModel[]>(this.apiUrl);
  }

}
