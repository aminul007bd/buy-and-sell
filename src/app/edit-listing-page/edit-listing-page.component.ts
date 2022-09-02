import { Observable } from 'rxjs';
import { Listing } from './../types';
import { ListingsService } from './../listings.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css'],
})
export class EditListingPageComponent implements OnInit {
  listing: Listing[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const paramId = id ? id : '';
    this.listingService.getListingById(paramId).subscribe((listing) => {
      this.listing = listing;
      console.log(this.listing[0].name);
    });
  }

  onSubmit({ name, description, price }: Listing): void {
    this.listingService
      .editListing(this.listing[0].id, name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listings');
      });
  }
}
