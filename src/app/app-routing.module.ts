import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingComponent } from './new-listing/new-listing.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'listings', component: ListingPageComponent, pathMatch: 'full' },
  {
    path: 'listings/:id',
    component: ListingDetailComponent,
    pathMatch: 'full',
  },
  { path: 'contact/:id', component: ContactPageComponent, pathMatch: 'full' },
  {
    path: 'edit-listing/:id',
    component: EditListingPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'my-listings',
    component: MyListingsPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'new-listing',
    component: NewListingComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
