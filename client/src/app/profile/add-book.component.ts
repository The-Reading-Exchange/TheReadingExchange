import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

 public books;
 public email = this.auth.getUserDetails().email;

  constructor(private searchService: SearchService, private router: Router, private auth: AuthenticationService) {}

  onSubmit(f) {
    console.log(f.value);
    this.searchService.getBooks(f).subscribe(
      data => { this.books = data; },
      err => console.error(err),
      () => console.log('done loading books', this.books)
    );
  }

  addBook(bookInfo) {
    this.searchService.addBook({email: this.email, book: bookInfo});
  }
}

