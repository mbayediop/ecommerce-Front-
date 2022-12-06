import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../models/article.model";

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {



  @Input() article: Article | undefined;

  constructor() { }

  ngOnInit(): void {

  }

  afficheArticle(article: Article | undefined){

    console.log(article)

  }

}
