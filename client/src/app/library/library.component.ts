import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../search.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {

  public books;

  constructor(private searchService: SearchService) {
   }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  }

  onSubmit(f) {
    console.log(f.value);
    this.searchService.getBooks(f).subscribe(
      data => { this.books = data; },
      err => console.error(err),
      () => console.log('done loading books', this.books)
    );
  }
}
