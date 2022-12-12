import {CategoriesModel} from "./categories.model";

export class Article {
  idArticle?: number;
  nomArticle?: string;
  prixArticle?: number;
  oldPrixArticle?:number;
  descriptionArticle?: string;
  stockArticle?: number;
  dateCreationArticle?: Date;
  imageArticle?: string;
  categorieId?: CategoriesModel;
}
