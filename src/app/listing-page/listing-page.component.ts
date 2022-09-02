import { ListingsService } from './../listings.service';
import { fakeListings } from './../fake-data';
import { Listing, LifeTimeSpend } from './../types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css'],
})
export class ListingPageComponent implements OnInit {
  listings: Listing[] = [];
  spends: LifeTimeSpend[] = [];
  constructor(private listingService: ListingsService) {}

  ngOnInit(): void {
    this.listingService
      .getListings()
      .subscribe((listings) => (this.listings = listings));

    this.listingService
      .getSpends()
      .subscribe((spends) => (this.spends = spends));
    console.log(this.spends);
  }
}
