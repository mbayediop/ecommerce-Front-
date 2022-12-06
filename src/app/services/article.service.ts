import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map} from 'rxjs/operators'
import {Article} from "../models/article.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private urlApi= environment.SERVER_URL

  constructor(private http: HttpClient) { }

 getArticles():Observable<Article[]>{
    return this.http.get<Article[]>(this.urlApi+"/articles");
 }

 getArticle():Observable<Article[]>{
    return this.http.get<Article[]>(this.urlApi+"/adduser")
 }

}
