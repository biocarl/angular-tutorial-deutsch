import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {
  books = [
    {
      title: "Book #1 from Service",
      subtitle: "Subtitle #1",
    },
    {
      title: "Book #2 from Service",
      subtitle: "Subtitle #2",
    },
    {
      title: "Book #3 from Service",
      subtitle: "Subtitle #3",
    },
  ];

  getBooks() {
    return this.books;
  }

  constructor() { }
}
