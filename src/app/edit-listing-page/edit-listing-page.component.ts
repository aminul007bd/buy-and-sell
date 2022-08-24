import { fakeMyListings } from './../fake-data';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css'],
})
export class EditListingPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  listing: Listing | undefined;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeMyListings.find((listing) => listing.id === id);
  }

  onSubmit(): void {
    alert('Edit changes done');
    this.router.navigateByUrl('/my-listings');
  }
}
