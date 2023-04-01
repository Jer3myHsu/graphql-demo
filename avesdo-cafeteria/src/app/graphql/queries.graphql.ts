import { gql } from 'apollo-angular';

export const GET_FOOD_LIST = gql`
query GetFoodList($maxPrice: Float) {
  allFoods(maxPrice: $maxPrice) {
    id
    name
    price
    imageUrl
  }
}
`;

export const GET_FOOD = gql`
query GetFood($id: ID) {
  food(id: $id) {
    id
    name
    calories
    cuisine
    description
    imageUrl
    price
    ingredients {
      name
      description
    }
  }
}
`;

