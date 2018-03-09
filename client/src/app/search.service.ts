import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SearchService {

    constructor(private http: HttpClient) {}

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
}