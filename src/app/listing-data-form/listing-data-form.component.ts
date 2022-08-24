import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css'],
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText: any;
  @Input() currentName: any = '';
  @Input() currentDescription: any = '';
  @Input() currentPrice: any = '';

  @Output() onSubmit = new EventEmitter<Listing>();
  name!: string;
  description: string = '';
  price: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}
  listing: Listing | undefined;

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: '',
      name: this.name,
      description: this.description,
      price: Number(this.price),
    });
  }
}
