import { Component, OnInit } from '@angular/core';
import {Article} from "../../models/article.model";
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-article-liste',
  templateUrl: './article-liste.component.html',
  styleUrls: ['./article-liste.component.css']
})
export class ArticleListeComponent implements OnInit {

  articles: Article []=[];

  afficherModal: boolean= false
  modalArticle: Article | undefined

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

    console.log(this.articles)
  }

  afficherArticleModal(article: Article){

    if (article){
      this.afficherModal= true
      this.modalArticle= article
    }
  }

  fermerArticleModal(){
    this.afficherModal= false
    this.modalArticle= undefined
  }
}
