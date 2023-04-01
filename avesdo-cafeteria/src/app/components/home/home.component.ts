import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GET_FOOD_LIST } from 'src/app/graphql/queries.graphql';
import { Food } from 'src/app/model/food';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FoodDetailComponent } from '../food-detail/food-detail.component';


import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  maxPrice = new FormControl();
  foods$!: Observable<Food[]>;

  constructor(
    private apollo: Apollo,
    private dialog: MatDialog
  ) {}

  openFoodDetails(foodId: number) {
    this.dialog.open(FoodDetailComponent, {
      data: {
        foodId
      },
      width: '500px'
    });
  }

  getFoods(maxPrice?: number) {
    this.foods$ = this.apollo.query({
      query: GET_FOOD_LIST,
      variables: {
        maxPrice
      }
    }).pipe(
      map((query: any) => query.data.allFoods)
    );
  }

  ngOnInit(): void {
    this.maxPrice.valueChanges.subscribe((maxPrice: number) => this.getFoods(maxPrice));
    this.getFoods();
  }
}
