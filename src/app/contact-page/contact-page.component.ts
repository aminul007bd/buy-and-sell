import { fakeListings } from './../fake-data';
import { Listing } from './../types';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from '../listings.service';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  listing: Listing[] = [];
  email: string = '';
  message: string = '';

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
      this.message = `Hello, I am interested in your ${this.listing[0]?.name.toLowerCase()}!`;
    });
  }

  sendMessage(): void {
    alert('Your message has been sent');
    this.router.navigateByUrl('/listings');
  }
}
