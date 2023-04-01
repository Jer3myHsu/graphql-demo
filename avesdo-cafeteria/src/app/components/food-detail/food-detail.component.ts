import { Component, Inject, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


import { Apollo } from 'apollo-angular';
import { Food } from 'src/app/model/food';
import { GET_FOOD } from 'src/app/graphql/queries.graphql';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {
  food$!: Observable<Food>;

  constructor(
    private apollo: Apollo,
    private dialogRef: MatDialogRef<FoodDetailComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit(): void {
    this.food$ = this.apollo.query({
      query: GET_FOOD,
      variables: {
        id: this.data.foodId
      }
    }).pipe(
      map((query: any) => query.data.food)
    );
  }

}
