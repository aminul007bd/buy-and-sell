import { Router } from '@angular/router';
import { ListingsService } from './../listings.service';
import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css'],
})
export class NewListingComponent implements OnInit {
  constructor(
    private listingService: ListingsService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit({ name, description, price }: Listing): void {
    this.listingService
      .createListing(name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listings');
      });
  }
}
