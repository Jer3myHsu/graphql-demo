const graphql = require('graphql');
const {
    ingredientsDB,
    foodDB,
    foodIngredientRelationDB
} = require('../db/db');
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList
} = graphql;

const IngredientType = new GraphQLObjectType({
    name: 'Ingredient',
    fields: () => ({
        id: { type: GraphQLID },
        color: { type: GraphQLString },
        description: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
        isVegetable: { type: GraphQLBoolean },
        name: { type: GraphQLString }
    })
});

const FoodType = new GraphQLObjectType({
    name: 'Food',
    fields: () => ({
        id: { type: GraphQLID },
        calories: { type: GraphQLInt },
        cuisine: { type: GraphQLString },
        description: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
        name: { type: GraphQLString },
        price: { type: GraphQLFloat },

        ingredients: {
            type: new GraphQLList(IngredientType),
            resolve(parent, args) {
                // Code to get the data
                return ingredientsDB.filter(ingredient => {
                    return foodIngredientRelationDB.find(table => parent.id == table.foodId && ingredient.id == table.ingredientId);
                });
            }
        }
    })
});

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        ingredient: {
            type: IngredientType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                // Code to get the data
                return ingredientsDB.find(ingredient => ingredient.id == args.id)
            }
        },
        food: {
            type: FoodType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                // Code to get the data
                return foodDB.find(food => food.id == args.id)
            }
        },
        allIngredients: {
            type: new GraphQLList(IngredientType),
            resolve(parent, args) {
                // Code to get the data
                return ingredientsDB;
            }
        },
        allFoods: {
            type: new GraphQLList(FoodType),
            args: { maxPrice: { type: GraphQLFloat }},
            resolve(parent, args) {
                // Code to get the data
                return foodDB.filter(food => args.maxPrice ? food.price <= args.maxPrice : true);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQueryType
})