import { Injectable } from '@angular/core';
import * as productsdata from "../../assets/productsJson.json";
import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProductserviceService {
  productrinatg1: number;
  productrating2: number;
  productrating3: number;
  productlist: any;
  products = [
    {
      productId: 1,
      description: "i5 1TB HDD 8GB",
      name: "Laptop1",
      image: "../../assets/product-1.png",
      rating: 4,
      starList: [],
      stock: "available",
    },
    {
      productId: 2,
      description: "i5 500TB HD 16GB ",
      name: "Laptop2",
      image: "../../assets/product-2.png",
      rating: 3,
      starList: [],
      stock: "available",
    },
    {
      productId: 3,
      description: "i7 1TB SSD 16GB",
      name: "Laptop3",
      image: "../../assets/product-3.png",
      stock: "NA",
    },
  ];

  ngOnInit() {}
  constructor(private httpClient: HttpClient) {}

  getproductbyId(id: number) {
    return this.products.find((e) => e.productId === id);
    console.log("eid", id);
  }
}
