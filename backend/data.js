const bcrypt = require('bcryptjs');


const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Pack of Books',
      category: 'Books',
      image: '/images/d8.jpg',
      price: 50,
      countInStock: 5,
      brand: 'Harry potter',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product. Purchase-Date: 12/07/2019(Age:4+ months). Condition : All Methods are accepted.  Name: Mahesh.  Phone :123456789.',
    },
    {
      name: 'Iphone ',
      category: 'electronic',
      image: '/images/d10.jpg',
      price: 3000,
      countInStock: 2,
      brand: 'Iphone',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product. Purchase-Date: 12/12/2019(Age:2+ year). Condition : All Methods are accepted.  Name: praveeen.  Phone :123456789.',
    },
    {
      name: 'Metal Exercise Cycle',
      category: 'Gym Equipment',
      image: '/images/d11.jpg',
      price:2000,
      countInStock: 1,
      brand: 'Power',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product. Purchase-Date: 12/12/2018(Age:2+ year). Condition : All Methods are accepted.  Name: Santosh.  Phone :123456789.',
    },
    {

      name: 'Mattress',
      category: 'Furniture',
      image: '/images/d9.jpg',
      price: 3000,
      countInStock: 2,
      brand: 'space',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product. Purchase-Date: 12/07/2019(Age:4+ months). Condition : Only Cash.  Name: Ravi.  Phone :123456789.',
    },
    
    {
      name: 'Electric kettle',
      category: 'Eectronic',
      image: '/images/d16.jpg',
      price: 100,
      countInStock: 2,
      brand: 'Philips',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product.  Litres: 2Litres. Purchase-Date: 12/06/2020(Age:6 months). Condition : All Methods are accepted.  Name: Arvind. Phone :123456789.',
    },

    {
      name: 'Electric Heater and Mixer',
      category: 'Electronic ',
      image: '/images/d17.jpg',
      price: 100,
      countInStock: 5,
      brand: 'Bajaj',
      rating: 4.5,
      numReviews: 15,
      description: 'High quality product. Purchase-Date: 12/12/2019(Age:1+ year). Condition : All Methods are accepted.  Name: Abbas.  Phone :123456789.',
    },

    {
      name: 'Folding Travel Bed',
      category: 'Travel Equipment ',
      image: '/images/d13.jpg',
      price: 200,
      countInStock: 2,
      brand: 'Sleep well',
      rating: 4.5,
      numReviews: 15,
      description: 'High quality product. Purchase-Date: 12/12/2019(Age:1+ year). Condition : All Methods are accepted.  Name: Abbas.  Phone :123456789.',
    },
  ],
};
module.exports= data;