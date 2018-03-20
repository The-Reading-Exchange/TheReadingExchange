import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileBooks;
  deals;
  details: UserDetails;

  constructor(private searchService: SearchService, private auth: AuthenticationService, private router: Router) {}

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
    return this.searchService.acceptDeal(dealNumber);
 }

 sendPayment(dealNumber) {
  return this.searchService.sendPayment(dealNumber);
}

  shipBook(dealNumber) {
    return this.searchService.shipBook(dealNumber);
 }

  shipBookBack(dealNumber) {
    return this.searchService.shipBookBack(dealNumber);
 }

 updateAddress(address, useremail) {
   console.log(address);
   return this.searchService.updateAddress(address.form.value.addressField, useremail)
    .subscribe(
    res => {
      console.log(res, 'after service');
      this.details.address = res.address;
    },
    err => {
      console.log('Error occured');
    }
  );
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
