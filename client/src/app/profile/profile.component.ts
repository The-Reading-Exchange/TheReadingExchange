import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { SearchService } from '../search.service';


@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileBooks;
  details: UserDetails;

  constructor(private searchService: SearchService, private auth: AuthenticationService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.auth.profile().subscribe(user => {
      this.details = user;
      this.getUserBooks(this.details);
    }, (err) => {
      console.error(err);
    });
  }

  getUserBooks(user) {
    console.log('starting the call from init');
    this.searchService.getUserBooks(user)
    .subscribe(
      res => {
        this.profileBooks = res.books;
        console.log(this.profileBooks, 'we are done');
      },
      err => {
        console.log('Error occured');
      }
    );
  }
}
