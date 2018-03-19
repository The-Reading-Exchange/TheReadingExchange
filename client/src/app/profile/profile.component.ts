import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { SearchService } from '../search.service';


@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileBooks;
  deals;
  details: UserDetails;

  constructor(private searchService: SearchService, private auth: AuthenticationService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.auth.profile().subscribe(user => {
      this.details = user;
      console.log(this.details);
    }, (err) => {
      console.error(err);
    });
  }
  acceptDeal(dealNumber) {
    this.searchService.acceptDeal(dealNumber);
 }

 sendPayment(dealNumber) {
  this.searchService.sendPayment(dealNumber);
}

  shipBook(dealNumber) {
    this.searchService.shipBook(dealNumber);
 }

  shipBookBack(dealNumber) {
    this.searchService.shipBookBack(dealNumber);
 }
}

//   getUserBooks(user) {
//     console.log('starting the call from init');
//     this.searchService.getUserBooks(user)
//     .subscribe(
//       res => {
//         this.profileBooks = res;
//         console.log(this.profileBooks, 'we are done');
//       },
//       err => {
//         console.log('Error occured');
//       }
//     );
//   }
// }
