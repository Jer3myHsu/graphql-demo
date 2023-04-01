import { Ingredient } from "./ingredient";

export interface Food {
  id: number,
  calories: string,
  cuisine: string,
  description: string,
  imageUrl: string,
  name: string,
  price: number,
  ingredients: Ingredient[]
}
