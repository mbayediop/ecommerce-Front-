import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from "../../models/article.model";

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {



  @Input() article: Article | undefined;

  @Output() afficherModalArticleView: EventEmitter<Article>= new EventEmitter<Article>()

  constructor() { }

  ngOnInit(): void {

  }

  afficheArticle(article: Article | undefined){

    console.log(article)
    this.afficherModalArticleView.emit(article)

  }

}
