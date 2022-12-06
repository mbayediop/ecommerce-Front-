import { Component, OnInit } from '@angular/core';
import {Article} from "../../models/article.model";
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

 articles: Article []=[];

  constructor(private service: ArticleService) { }

  ngOnInit(): void {
    this.service.getArticles().subscribe({
      next: (data:Article[] )=>{
        this.articles = data;
      },
      error: (err: any)=>{
        console.log("Error : ", err);
      },
      complete: () => {
        console.log("Tout se passe comme prevu");
      }
      }
    )
  }

}
