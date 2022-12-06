import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from "../../models/article.model";

@Component({
  selector: 'app-modal-article-view',
  templateUrl: './modal-article-view.component.html',
  styleUrls: ['./modal-article-view.component.css']
})
export class ModalArticleViewComponent implements OnInit {

  @Input() article: Article | undefined;

  @Output() close: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  fermerModal(){
    this.close.emit()
  }
}
