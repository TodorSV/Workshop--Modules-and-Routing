import { Component, Input } from '@angular/core';
import { Post } from 'src/app/themes-list/types/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {

  // Кастваме as Post, защото иначе ще се оплаква, че не може да намери полетата на обекта
@Input('post') post = {} as Post;
}
