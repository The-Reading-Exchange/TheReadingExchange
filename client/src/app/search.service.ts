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
    getBooks() {
        return this.http.get('https://www.googleapis.com/books/v1/volumes?q=potter');
    }
}
