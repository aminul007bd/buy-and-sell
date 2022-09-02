import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Listing, LifeTimeSpend } from './types';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const base_url = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  constructor(private http: HttpClient) {}

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  }

  getSpends(): Observable<LifeTimeSpend[]> {
    return this.http.get<LifeTimeSpend[]>('/api/spends');
  }

  getListingById(id: string): Observable<Listing[]> {
    return this.http.get<Listing[]>(`/api/listing/${id}`);
  }

  addViewToListing(id: string): Observable<Listing> {
    return this.http.post<Listing>(
      `/api/listings/${id}/add-view`,
      {},
      httpOptions
    );
  }

  getListingsForUser(): Observable<Listing[]> {
    const userId = 12;
    return this.http.get<Listing[]>(`/api/users/${userId}/listings`);
  }

  deleteListing(id: string): Observable<any> {
    return this.http.delete(`/api/listings/${id}`);
  }

  createListing(
    name: string,
    description: string,
    price: number
  ): Observable<Listing> {
    return this.http.post<Listing>(
      'api/listings',
      { name, description, price },
      httpOptions
    );
  }

  editListing(
    id: string,
    name: string,
    description: string,
    price: number
  ): Observable<Listing> {
    return this.http.post<Listing>(
      `api/listings/${id}`,
      { name, description, price },
      httpOptions
    );
  }
}
