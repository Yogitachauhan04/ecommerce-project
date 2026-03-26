const products = [

    //WOMEN
  {
    id: 2,
    name: "Gucci duffle bag",
    images: ["/a1 (2).svg", "/a1 (2).svg"],
    price: 920,
    oldprice: 1200,
    discount: "30%",
    rating: 2.5,
    category: "women",
    description:
      "Luxury duffle bag with spacious compartments, ideal for travel, gym, and everyday use.",
    colors: ["#000000", "#ff4d6d"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
  id: 51,
  name: "flower print onepiece",
  images: ["/a (1).jpg", "/a (1).jpg"],
  price: 920,
  oldprice: 1200,
  discount: "30%",
  rating: 3.5,
  category: "women",
  description:
    "Elegant floral print one-piece dress made with soft, breathable fabric. Perfect for casual outings, brunches, and summer wear.",
  colors: ["#000000", "#ff4d6d"],
  sizes: ["XS", "S", "M", "L", "XL"]
},
{
  id: 52,
  name: "yellow flower print onepiece",
  images: ["/a (2).jpg", "/a (2).jpg"],
  price: 920,
  oldprice: 1200,
  discount: "30%",
  rating: 3.5,
  category: "women",
  description:
    "Bright yellow floral one-piece dress that adds a fresh and cheerful look. Ideal for daytime wear, vacations, and summer parties.",
  colors: ["#000000", "#ff4d6d"],
  sizes: ["XS", "S", "M", "L", "XL"]
},
{
  id: 53,
  name: "red flower print long onepiece",
  images: ["/shopping (3).webp", "/shopping (3).webp"],
  price: 920,
  oldprice: 1200,
  discount: "30%",
  rating: 5,
  category: "women",
  description:
    "Stylish red floral long one-piece dress with a flattering fit. Perfect for evening outings, festive occasions, and special events.",
  colors: ["#000000", "#ff4d6d"],
  sizes: ["XS", "S", "M", "L", "XL"]
},
{
  id: 54,
  name: "white gray long onepiece",
  images: ["/shopping1.webp", "/shopping1.webp"],
  price: 920,
  oldprice: 1200,
  discount: "30%",
  rating: 4.5,
  category: "women",
  description:
    "Chic white and grey long one-piece dress with a classy minimal design. Suitable for casual wear, office outings, and elegant looks.",
  colors: ["#000000", "#ff4d6d"],
  sizes: ["XS", "S", "M", "L", "XL"]
},

//MEN

 {
  id: 1,
  name: "The North Winter Coat",
  images: ["/a1 (3).svg", "/a1 (3).svg"],
  price: 1200,
  oldprice: 2000,
  discount: "40%",
  rating: 4.5,
  category: "men",
  description:
    "Premium winter coat with insulated fabric to keep you warm and stylish during cold weather.",
  sizes: ["S", "M", "L", "XL"],
  colors: ["#000000", "#ff4d6d"]
},
{
  id: 31,
  name: "Quilted Satin Jacket",
  images: ["/b1.png", "/b1.png"],
  price: 620,
  oldprice: 1400,
  discount: "55%",
  rating: 4.0,
  category: "men",
  description:
    "Trendy quilted satin jacket suitable for winter outings and casual wear.",
  sizes: ["M", "L", "XL"],
  colors: ["#1b1f23", "#2f4f4f"]
},
{
  id: 60,
  name: "Brown Winter Jacket",
  images: ["/mens-fashion.webp", "/mens-fashion.webp"],
  price: 620,
  oldprice: 1300,
  discount: "55%",
  rating: 4.1,
  category: "men",
  description:
    "Classic brown winter jacket with modern fit, perfect for everyday winter styling.",
  sizes: ["M", "L", "XL"],
  colors: ["#8b4513", "#5a3e2b"]
},
{
  id: 61,
  name: "White T-Shirt with Denim Jeans",
  images: ["/mens-fashion1.webp", "/mens-fashion1.webp"],
  price: 999,
  oldprice: 1599,
  discount: "38%",
  rating: 4.2,
  category: "men",
  description:
    "Casual combo of soft cotton white t-shirt paired with stylish blue denim jeans.",
  sizes: ["S", "M", "L", "XL"],
  colors: ["#ffffff", "#1e3a8a"]
},
{
  id: 62,
  name: "Navy Blue Shirt with Cream Jeans",
  images: ["/mens-fashion2.jpg", "/mens-fashion2.jpg"],
  price: 1099,
  oldprice: 1699,
  discount: "35%",
  rating: 4.3,
  category: "men",
  description:
    "Elegant navy blue shirt combined with cream jeans for a smart casual look.",
  sizes: ["M", "L", "XL"],
  colors: ["#0a2540", "#f5f5dc"]
},
{
  id: 63,
  name: "Men's Classic Sherwani",
  images: ["/mens-fashion3.webp", "/mens-fashion3.webp"],
  price: 3499,
  oldprice: 5999,
  discount: "40%",
  rating: 4.6,
  category: "men",
  description:
    "Traditional men's sherwani crafted for weddings and festive occasions.",
  sizes: ["M", "L", "XL", "XXL"],
  colors: ["#2c2c2c", "#4b0082"]
},
{
  id: 64,
  name: "Black Sherwani for Groom",
  images: ["/mens-fashion4.jpeg", "/mens-fashion4.jpeg"],
  price: 4999,
  oldprice: 7999,
  discount: "38%",
  rating: 4.7,
  category: "men",
  description:
    "Luxury black sherwani designed specially for grooms and grand celebrations.",
  sizes: ["M", "L", "XL", "XXL"],
  colors: ["#000000", "#3a3a3a"]
},
{
  id: 65,
  name: "Cream Colour Wedding Sherwani",
  images: ["/mens-fashion5.webp", "/mens-fashion5.webp"],
  price: 4599,
  oldprice: 7499,
  discount: "39%",
  rating: 4.6,
  category: "men",
  description:
    "Elegant cream-colored sherwani with royal detailing, perfect for weddings.",
  sizes: ["M", "L", "XL", "XXL"],
  colors: ["#f5f5dc", "#e6d3a3"]
},


  // 🔵 ELECTRONICS

  {
    id: 3,
    name: "RGB Liquid CPU Cooler",
    images: ["/a1 (1).svg", "/a1 (1).svg"],
    price: 370,
    oldprice: 500,
    discount: "30%",
    rating: 4.5,
    category: "electronic",
    description:
      "High-performance RGB liquid CPU cooler designed for efficient cooling.",
    colors: ["#000000"],
    sizes: ["Standard"]
  },
  {
    id: 11,
    name: "Gamepad",
    images: ["/gamepad.svg", "/gamepad.svg"],
    price: 120,
    oldprice: 200,
    discount: "30%",
    rating: 4.5,
    category: "electronic",
    description:
      "Ergonomic gaming gamepad with smooth controls and strong grip.",
    colors: ["#000000", "#ff0000"],
    sizes: ["Standard"]
  },
  {
    id: 12,
    name: "Keyboard",
    images: ["/shopping.webp", "/shopping.webp"],
    price: 920,
    oldprice: 1200,
    discount: "30%",
    rating: 3.5,
    category: "electronic",
    description:
      "High quality keyboard with soft keys and fast response.",
    colors: ["#000000"],
    sizes: ["Standard"]
  },
  {
    id: 13,
    name: "Monitor",
    images: ["/shopping (1).webp", "/shopping (1).webp"],
    price: 370,
    oldprice: 500,
    discount: "30%",
    rating: 4.5,
    category: "electronic",
    description:
      "HD monitor with clear display and eye-friendly screen.",
    colors: ["#000000"],
    sizes: ["24 inch", "27 inch"]
  },
{
    id: 32,
    name: "Gp11 shooter gamepad",
    images: ["/b2.png", "/b2.png"],
    price: 920,
    oldprice: 1200,
    discount: "30%",
    rating: 3,
    category: "electronic",
    description: "High performance shooter gamepad designed for smooth and immersive gaming.",
    sizes: ["Standard"],
    colors: ["#000000", "#198754"]
  },
    {
    id: 34,
    name: "Kids electric car",
    images: ["/b4.png", "/b4.png"],
    price: 375,
    oldprice: 400,
    discount: "30%",
    rating: 4.5,
     category: "electronic",
    description: "Fun and safe electric car for kids with smooth driving experience.",
    sizes: ["Kids"],
    colors: ["#ff0000", "#0000ff", "#ffffff"]
  },
  {
    id: 35,
    name: "Asus FHD gaming laptop",
    images: ["/b5.png", "/b5.png"],
    price: 120,
    oldprice: 200,
    discount: "30%",
    rating: 4.5,
     category: "electronic",
    description: "Powerful gaming laptop with full HD display for high performance gaming.",
    sizes: ["15-inch"],
    colors: ["#000000", "#343a40"]
  },
  {
    "id": 36,
    name: "Canon EOS DSLR Camera",
    images: ["/b6.png", "/b6.png"],
    price: 920,
    oldprice: 1200,
    discount: "30%",
    rating: 3.5,
     category: "electronic",
    description: "Professional DSLR camera delivering high quality photos and videos.",
    sizes: ["Standard"],
    colors: ["#000000"]
  },

  // 🟢 HOME / LIFESTYLE
  {
    id: 4,
    name: "Small Book Shelf",
    images: ["/a1 (4).svg", "/a1 (4).svg"],
    price: 375,
    oldprice: 400,
    discount: "30%",
    rating: 4.5,
    category: "lifestyle",
    description:
      "Compact and modern bookshelf perfect for organizing books.",
    colors: ["#000000"],
    sizes: ["Standard"]
  },
  {
    id: 14,
    name: "Chair",
    images: ["/shopping (2).webp", "/shopping (2).webp"],
    price: 375,
    oldprice: 400,
    discount: "30%",
    rating: 4.5,
    category: "lifestyle",
    description:
      "Comfortable chair with strong build for home and office use.",
    colors: ["#000000"],
    sizes: ["Small", "Medium", "Large"]
  },

  //SPORTS
    {
    id: 33,
    name: "Jr. Zoom soccer cleats",
    images: ["/b3.png", "/b3.png"],
    price: 370,
    oldprice: 500,
    discount: "30%",
    rating: 4.5,
     category: "sports",
    description: "Lightweight soccer cleats providing excellent grip and comfort for young players.",
    sizes: ["6", "7", "8", "9"],
    colors: ["#0d6efd", "#ffc107"]
  },

  //GROCERIES AND PETS
  {
    id: 37,
    name: "Bird dry dog food",
    images: ["/b7.png", "/b7.png"],
    price: 370,
    oldprice: 500,
    discount: "30%",
    rating: 4.5,
     category: "groceries",
    description: "Nutritious dry dog food that supports healthy growth and digestion.",
    sizes: ["1kg", "3kg", "5kg"],
    colors: ["#795548", "#ffc107"]
  },

  //HEALTH AND BEAUTY
  {
    id: 38,
    name: "Curology product set",
    images: ["/b8.png", "/b8.png"],
    price: 375,
    oldprice: 400,
    discount: "30%",
    rating: 4.5,
     category: "health",
    description: "Complete skincare product set for healthy and glowing skin.",
    sizes: ["Small", "Medium"],
    colors: ["#ffffff", "#e83e8c"]
  },
  //BABY  AND TOYS
{
  id: 55,
  name: "pink barbie set",
  images: ["/baby.jpg", "/baby.jpg"],
  price: 799,
  oldprice: 999,
  discount: "20%",
  rating: 4.6,
  category: "babytoy",
  description: "Cute pink Barbie play set designed to boost imagination and role-play skills in kids. Made from safe, non-toxic material.",
  sizes: ["Standard"],
  colors: ["#ff69b4", "#ffc0cb"]
},
{
  id: 56,
  name: "baby play bed",
  images: ["/baby3.webp", "/baby3.webp"],
  price: 1299,
  oldprice: 1599,
  discount: "25%",
  rating: 4.7,
  category: "babytoy",
  description: "Soft and comfortable baby play bed with colorful patterns. Provides a safe and cozy space for babies to play and rest.",
  sizes: ["Small", "Medium"],
  colors: ["#f8f9fa", "#ffe4b5"]
},
{  
  id: 57,
  name: "baby small duck game",
  images: ["/baby2.webp", "/baby2.webp"],
  price: 349,
  oldprice: 499,
  discount: "30%",
  rating: 4.4,
  category: "babytoy",
  description: "Fun duck-shaped toy that entertains babies while improving hand-eye coordination and sensory skills.",
  sizes: ["Small"],
  colors: ["#ffd700", "#ffa500"]
},
{
  id: 58,
  name: "baby little smartest game",
  images: ["/baby1.webp", "/baby1.webp"],
  price: 599,
  oldprice: 799,
  discount: "25%",
  rating: 4.6,
  category: "babytoy",
  description: "Educational toy designed to enhance thinking, learning, and problem-solving skills in young children.",
  sizes: ["Medium"],
  colors: ["#00bcd4", "#8bc34a"]
},

  //MEDICINES
{
  id: 59,
  name: "Paracetamol Tablets IP",
  images: ["/paracetamol.jpg", "/paracetamol.jpg"],
  price: 120,
  oldprice: 150,
  discount: "20%",
  rating: 4.5,
  category: "medicine",
  description: "Paracetamol Tablets IP are used to relieve mild to moderate pain and reduce fever. Commonly prescribed for headaches, body pain, cold, and flu. Should be taken as directed by a healthcare professional.",
  sizes: ["10 Tablets", "15 Tablets"],
  colors: ["#ffffff", "#e9ecef"]
},


];

export default products;
