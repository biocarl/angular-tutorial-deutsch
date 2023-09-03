import { Component } from '@angular/core';
import {BookDataService} from "../book-data.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: { title: string; subtitle: string; }[];

  constructor(private bookData: BookDataService) {
    this.books = this.bookData.getBooks();
  }
}
