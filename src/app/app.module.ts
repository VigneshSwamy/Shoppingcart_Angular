import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {CartserviceService} from './service/cartservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { ProductRatingComponent } from './product-rating/product-rating.component';
import { StarratingComponent } from './starrating/starrating.component';
import { Starratingprd2Component } from './starratingprd2/starratingprd2.component';
import { Starratingprd3Component } from './starratingprd3/starratingprd3.component';
import { HighlightDirective } from './highlight.directive';

import { ContactusComponent } from './contactus/contactus.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AcceptedReviewPipePipe } from './product-list/accepted-review-pipe.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    ProductListComponent,
    ProductRatingComponent,
    StarratingComponent,
    Starratingprd2Component,
    Starratingprd3Component,
    HighlightDirective,
    ContactusComponent,
    ProductdetailComponent,
    AcceptedReviewPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [StarratingComponent],
  providers: [CartserviceService, AcceptedReviewPipePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
