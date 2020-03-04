import { Injectable } from '@angular/core';
import { Article } from 'src/model/Aricle';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }


  getArticles() {
    return this.http.get<Article[]>('http://localhost:8080/v1/rest/cinatis/articles', httpOptions);
  }
}
