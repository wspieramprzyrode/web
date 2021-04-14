import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/core/services/graphql.service';
import { PlaceCategory } from './types';

@Component({
  selector: 'app-admin-place-categories',
  templateUrl: './place-categories.component.html'
})


export class PlaceCategoriesComponent implements OnInit {
  categories: PlaceCategory[];
  first = 0;

  rows = 10;
  loading: boolean = true;
  token: string = '';

  constructor(private graphqlService: APIService) { }

  ngOnInit(): void {
    this.fetchCategories(this.rows, this.token);
  }

  next(): void {
    this.first = this.first + this.rows;
  }

  prev(): void {
    this.first = this.first - this.rows;
  }

  reset(): void {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.categories ? this.first === (this.categories.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.categories ? this.first === 0 : true;
  }
  private fetchCategories(limit: number, token: string): void {
    this.graphqlService.ListPlaceCategorys(null, this.rows).then(data => {
      this.categories = data.items;
      this.loading = false;
    }).catch(err => { console.log(err); });
  }

  createCategory() {
    //execute action
  }


}
