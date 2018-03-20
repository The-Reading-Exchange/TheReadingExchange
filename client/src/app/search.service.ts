import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SearchService {

    constructor(private http: HttpClient, private router: Router) {}

    handleError(error, otherthing) {
        console.log(error);
    }

    // Uses http.get() to load data from a single API endpoint
    getBooks(f) {
        let titleCall = '';
        let authorCall = '';
        let isbnCall = '';
        if (f.form.value.titleTextField !== '') {titleCall = f.value.titleTextField; } else {titleCall = ''; }
        if (f.form.value.authorTextField !== '') {authorCall = '+inauthor:' + f.value.authorTextField; } else { authorCall = ''; }
        if (f.form.value.isbnTextField !== '') { isbnCall = '+isbn:' + f.value.isbnTextField; } else { isbnCall = ''; }
        isbnCall = isbnCall.split('-').join('');

        return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=` + titleCall + authorCall + isbnCall);
    }

    getBook(isbn) {
        return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:` + isbn);
    }

/** POST: add a new hero to the database */
    addBook (book) {
        console.log(book, 'before service');
        this.http.post('/api/add-book', book)
        .subscribe(
            res => {
              console.log(res, 'after service');
              this.router.navigateByUrl('/profile');
            },
            err => {
              console.log('Error occured');
            }
          );
    }

    getUserBooks(user) {
        const userid = String(user._id);
        return this.http.get(`api/getprofilebooks/${userid}`);
    }

    findLenders(isbn) {
        return this.http.get(`api/getlenders/${isbn}`);
    }

    startDeal(emailToDB, isbnToDB, borrowerEmail, lendername, lenderaddress, borroweraddress) {
        // tslint:disable-next-line:prefer-const
        let dealInfo = {'lenderEmail': emailToDB,
        'isbn': isbnToDB,
        'borrowerEmail': borrowerEmail,
        'status': 'RequestedToBorrow',
        'lenderName': lendername,
        'lenderAddress': lenderaddress,
        'borrowerAddress': borroweraddress};
        console.log(dealInfo);
        this.http.post(`/api/startdeal`, dealInfo)
        .subscribe(
            res => {
              console.log(res, 'after service');
            },
            err => {
              console.log('Error occured');
            }
          );
    }
    acceptDeal(dealNumber) {
        // tslint:disable-next-line:prefer-const
        let dealNumberService = {dealNumber: dealNumber};
        console.log(dealNumberService, 'the deal object being sent in the accept service');
        return this.http.post(`/api/acceptdeal`, dealNumberService)
        .subscribe(
            res => {
              console.log(res, 'after service');
            },
            err => {
              console.log('Error occured');
            }
          );
     }
     sendPayment(dealNumber) {
        // tslint:disable-next-line:prefer-const
        let dealNumberService = {dealNumber: dealNumber};
        console.log(dealNumberService, 'the deal object being sent in the send payment service');
        return this.http.post(`/api/sendpayment`, dealNumberService)
        .subscribe(
            res => {
              console.log(res, 'after service');
            },
            err => {
              console.log('Error occured');
            }
          );
     }
      shipBook(dealNumber) {
        // tslint:disable-next-line:prefer-const
        let dealNumberService = {dealNumber: dealNumber};
        return this.http.post(`/api/shipbook`, dealNumberService)
        .subscribe(
            res => {
              console.log(res, 'after service');
            },
            err => {
              console.log('Error occured');
            }
          );
     }
      shipBookBack(dealNumber) {
        // tslint:disable-next-line:prefer-const
        let dealNumberService = {dealNumber: dealNumber};
        return this.http.post(`/api/shipbookback`, dealNumberService)
        .subscribe(
            res => {
              console.log(res, 'after service');
            },
            err => {
              console.log('Error occured');
            }
          );
     }

     updateAddress(userAddress, userEmail) {
        // tslint:disable-next-line:prefer-const
        let updateAddressObject = {address: userAddress, email: userEmail};
        console.log(updateAddressObject, 'this is the update address object');
        return this.http.post(`/api/updateaddress`, updateAddressObject)
        .subscribe(
            res => {
              console.log(res, 'after service');
            },
            err => {
              console.log('Error occured');
            }
          );
    }

}
