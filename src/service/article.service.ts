import { Injectable } from '@angular/core';
import { Article } from 'src/model/Aricle';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get<Article[]>(`${environment.apiUrl}/articles`);
  }
}
