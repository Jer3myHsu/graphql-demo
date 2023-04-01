const ingredientsDB = [{
        id: 1,
        color: 'red',
        description: 'It is sweet',
        imageUrl: '',
        isVegetable: false,
        name: 'Tomato'
    }, {
        id: 2,
        color: 'white',
        description: 'It is salty',
        imageUrl: '',
        isVegetable: false,
        name: 'Salt'
    }, {
        id: 3,
        color: 'green',
        description: 'Looks like a tree',
        imageUrl: '',
        isVegetable: true,
        name: 'Broccoli'
    }, {
        id: 4,
        color: 'red',
        description: 'Cow',
        imageUrl: '',
        isVegetable: false,
        name: 'Beef'
    }, {
        id: 5,
        color: 'Green',
        description: 'Yum',
        imageUrl: '',
        isVegetable: true,
        name: 'Lettuce'
    }, {
        id: 6,
        color: 'brown',
        description: 'Bread for burgers',
        imageUrl: '',
        isVegetable: false,
        name: 'Buns'
    }, {
        id: 7,
        color: 'yellow',
        description: 'Made from milk',
        imageUrl: '',
        isVegetable: false,
        name: 'Cheese'
    }, {
        id: 8,
        color: 'white',
        description: 'Dough',
        imageUrl: '',
        isVegetable: false,
        name: 'Dough'
    }, {
        id: 9,
        color: 'yellow',
        description: 'Shaped funny',
        imageUrl: '',
        isVegetable: false,
        name: 'Macaroni'
    }, {
        id: 10,
        color: 'white',
        description: 'Sweet',
        imageUrl: '',
        isVegetable: false,
        name: 'Sugar'
    }, {
        id: 11,
        color: 'none',
        description: 'It\'s a liquid',
        imageUrl: '',
        isVegetable: false,
        name: 'Water'
    }, {
        id: 12,
        color: 'yellow',
        description: 'Sour',
        imageUrl: '',
        isVegetable: false,
        name: 'Lemon'
    }
];

const foodDB = [{
        id: 1,
        calories: 1000,
        cuisine: 'American',
        description: 'A special sandwich.',
        imageUrl: 'https://www.thespruceeats.com/thmb/vf61j0CDD-RYdis4LVqmBV5NDzU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/all-american-burgers-480989-hero-05-6d4542f5661c4fd6889c16a445478e0c.jpg',
        name: 'Burger',
        price: 12.50
    }, {
        id: 2,
        calories: 350,
        cuisine: 'Italian',
        description: 'Can be cut into slices.',
        imageUrl: 'https://preppykitchen.com/wp-content/uploads/2021/10/Cheese-Pizza-Blog1.jpg',
        name: 'Pizza',
        price: 7
    }, {
        id: 3,
        calories: 1000,
        cuisine: 'French',
        description: 'Cheesy...',
        imageUrl: 'https://bakingmischief.com/wp-content/uploads/2016/08/mac-and-cheese-for-one-image.jpg',
        name: 'Mac & Cheese',
        price: 14.50
    }, {
        id: 4,
        calories: 500,
        cuisine: 'American',
        description: 'So refreshing!',
        imageUrl: 'https://redandhoney.com/wp-content/uploads/2019/06/Honey-Sweetened-Lemonade.jpg',
        name: 'Lemonade',
        price: 2
    }
];

const foodIngredientRelationDB = [{
        foodId: 1,
        ingredientId: 1,
    }, {
        foodId: 1,
        ingredientId: 4,
    }, {
        foodId: 1,
        ingredientId: 6,
    }, {
        foodId: 1,
        ingredientId: 7,
    }, {
        foodId: 2,
        ingredientId: 1,
    }, {
        foodId: 2,
        ingredientId: 7,
    }, {
        foodId: 2,
        ingredientId: 8,
    }, {
        foodId: 3,
        ingredientId: 2,
    }, {
        foodId: 3,
        ingredientId: 7,
    }, {
        foodId: 3,
        ingredientId:  9,
    }, {
        foodId: 4,
        ingredientId: 10,
    }, {
        foodId: 4,
        ingredientId: 11,
    }, {
        foodId: 4,
        ingredientId: 12,
    }
]

module.exports = {
    ingredientsDB,
    foodDB,
    foodIngredientRelationDB
};