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
}
