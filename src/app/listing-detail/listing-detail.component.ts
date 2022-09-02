import { ListingsService } from './../listings.service';
import { fakeListings } from './../dummy-data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css'],
})
export class ListingDetailComponent implements OnInit {
  isLoading: boolean = true;
  listing: Listing[] = [];
  constructor(
    private route: ActivatedRoute,
    private listingService: ListingsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    const paramId = id ? id : '';

    this.listingService.getListingById(paramId).subscribe((listing) => {
      this.listing = listing;
      this.isLoading = false;
    });

    this.listingService
      .addViewToListing(paramId)
      .subscribe(() => console.log('view updated'));
  }
}
