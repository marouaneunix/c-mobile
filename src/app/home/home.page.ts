import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/service/article.service';
import { Article } from 'src/model/Aricle';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticles()
      .subscribe((articles: Article[]) => { this.articles = articles; }, error => console.log(JSON.stringify(error)));
  }
}
