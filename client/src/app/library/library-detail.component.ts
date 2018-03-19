import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, UserDetails } from '../authentication.service';

@Component({
  selector: 'app-library-detail',
  templateUrl: './library-detail.component.html',
  styleUrls: ['./library-detail.component.css']
})
export class LibraryDetailComponent implements OnInit {

  details: UserDetails;
  public book;
  public bookIsbn;
  private sub: any;
  lenders;


  constructor(private route: ActivatedRoute,
    private searchService: SearchService,
    private auth: AuthenticationService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params, 'the params we are pulling');
       this.book = params['isbn'];
       this.bookIsbn = params['isbn'];
       console.log(this.book, 'isbn in the oninit');
       this.getBook(this.book);
    });

    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }

  getBook(isbn) {
    this.searchService.getBook(isbn).subscribe(
      data => { this.book = data; },
      err => console.error(err),
      () => console.log('done loading book', this.book)
    );
  }

  findLenders(isbn) {
    console.log('starting the call from init');
    this.searchService.findLenders(isbn)
    .subscribe(
      res => {
        this.lenders = res;
        console.log(this.lenders, 'we are done');
      },
      err => {
        console.log('Error occured');
      }
    );
  }

  startDeal(emailToDB, isbnToDB, borrowerEmail, lendername, lenderaddress) {
    this.searchService.startDeal(emailToDB, isbnToDB, borrowerEmail, lendername, lenderaddress)
    .subscribe(
      res => {
        console.log(res, 'we are done');
      },
      err => {
        console.log('Error occured');
      }
    );
  }
}
