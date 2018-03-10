import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-library-detail',
  templateUrl: './library-detail.component.html',
  styleUrls: ['./library-detail.component.css']
})
export class LibraryDetailComponent implements OnInit {

  public book;
  public bookIsbn;
  private sub: any;


  constructor(private route: ActivatedRoute,
    private searchService: SearchService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params, 'the params we are pulling');
       this.book = params['isbn'];
       this.bookIsbn = params['isbn'];
       console.log(this.book, 'isbn in the oninit');
       this.getBook(this.book);
    });
  }

  getBook(isbn) {
    this.searchService.getBook(isbn).subscribe(
      data => { this.book = data; },
      err => console.error(err),
      () => console.log('done loading book', this.book)
    );
  }
}
