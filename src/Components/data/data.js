import product1 from "../Assets/helium1.jpg"
import product2 from "../Assets/helium.png"
import product3 from "../Assets/luxury-wedding-ceremony.jpg"

const data = [
    { id: 1, 
      name: 'Product 1', 
      description: "Lorem ipsum dolor", 
      singlePhoto1: product1, 
      singlePhoto2: product2, 
      singlePhoto3: product2,
      category: 'Buqeta', 
      price: 19.99, 
      image: product1 
    },{ 
      id: 2, 
      name: 'Product 2', 
      description: "Lorem ipsum dolor sit amet consectour, sit amet consectour sit amet consectour sit amet consectour dolores es amet consectour", 
      singlePhoto1: product2, 
      singlePhoto2: product1,
      singlePhoto3: product2,
      category: 'Buqeta', 
      price: 29.99, 
      image: product2 
    },{ 
      id: 3, 
      name: 'Product 3', 
      description: "Lorem ipsum dolor3", 
      singlePhoto1: product3, 
      singlePhoto2: product3, 
      singlePhoto3: product2,
      category: 'Other', 
      price: 39.99, 
      image: product3 
    },{ 
      id: 4, 
      name: 'Product 4', 
      description: "Lorem ipsum dolor4", 
      singlePhoto1: product3, 
      singlePhoto2: product1, 
      singlePhoto3: product2,
      category: 'Other', 
      price: 49.99, 
      image: product1 
    },{
      id: 5, 
      name: 'Product 5', 
      description: "Lorem ipsum dolor4", 
      singlePhoto1: product3, 
      singlePhoto2: product1, 
      singlePhoto3: product2,
      category: 'Other', 
      price: 49.99, 
      image: product1 
    },{
      id: 6, 
      name: 'Product 6', 
      description: "Lorem ipsum dolor4", 
      singlePhoto1: product3, 
      singlePhoto2: product1, 
      singlePhoto3: product2,
      category: 'Other', 
      price: 49.99, 
      image: product1 
    }
    
  ];

  export { data }