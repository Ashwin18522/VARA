import Bangles from '../components/Assets/images/Bangles.jpeg';
import BigBunny from '../components/Assets/images/bigBunny.jpeg';
import CatCounting from '../components/Assets/images/Cat Counting.jpeg';
import GaintWheel from '../components/Assets/images/Gaint Wheel.jpeg';
import Helicopter from '../components/Assets/images/Helicopter.jpeg';
import Scooter from '../components/Assets/images/Scooter.jpeg';
import Snail from '../components/Assets/images/Snail.jpeg';
import Soldiers from '../components/Assets/images/Soldiers.jpeg';
import Train from '../components/Assets/images/Train.jpeg';
import TrainEngine from '../components/Assets/images/TrainEngine.jpeg';
import Truck from '../components/Assets/images/Truck.jpeg';
import Veena from '../components/Assets/images/Veena.jpeg';
import VintageCar from '../components/Assets/images/Vintage Car.jpeg';

const products = [
  {
    product_id: 101,
    name: "Bangles",
    price: 299,
    description: "Handcrafted bangles perfect for traditional outfits.",
    category: "Accessories",
    stock_quantity: 25,
    artisan_id: 1,
    image_url: Bangles,
    created_at: "2025-04-10T08:00:00",
    artisan_name: "Bhupathy",
    material_used: "Ivory Wood, Natural Lacquer, Vegetable Dyes",
    vara_nanya:15
  },
  {
    product_id: 102,
    name: "Big Bunny",
    price: 399,
    description: "A bunny toy that kids will love to cuddle.",
    category: "Toys",
    stock_quantity: 20,
    artisan_id: 2,
    image_url: BigBunny,
    created_at: "2025-04-10T08:05:00",
    artisan_name: "Bhupathy",
    material_used: "Ivory Wood, Natural Lacquer, Vegetable Dyes",
    vara_nanya:10
  },
  {
    product_id: 103,
    name: "Cat Counting",
    price: 349,
    description: "A fun and educational wooden cat-themed counting toy.",
    category: "Toys",
    stock_quantity: 18,
    artisan_id: 3,
    image_url: CatCounting,
    created_at: "2025-04-10T08:10:00",
    artisan_name: "Bhupathy",
    material_used: "Ivory Wood, Natural Lacquer, Vegetable Dyes",
    vara_nanya: 5
  },
  {
    product_id: 104,
    name: "Giant Wheel",
    price: 599,
    description: "A miniature ferris wheel decor piece.",
    category: "Decor",
    stock_quantity: 10,
    artisan_id: 4,
    image_url: GaintWheel,
    created_at: "2025-04-10T08:15:00",
    artisan_name: "Bhupathy",
    material_used: "Ivory Wood, Natural Lacquer, Vegetable Dyes",
    vara_nanya: 5
  },
  {
    product_id: 105,
    name: "Helicopter",
    price: 449,
    description: "A spinning wooden helicopter with bright colors and charm.",
    category: "Toys",
    stock_quantity: 12,
    artisan_id: 5,
    image_url: Helicopter,
    created_at: "2025-04-10T08:20:00",
    artisan_name: "Bhupathy",
    material_used: "Ivory Wood, Natural Lacquer, Vegetable Dyes",
    vara_nanya: 5
  },
  {
    product_id: 106,
    name: "Scooter",
    price: 329,
    description: "A handcrafted wooden scooter perfect for imaginative play.",
    category: "Toys",
    stock_quantity: 17,
    artisan_id: 6,
    image_url: Scooter,
    created_at: "2025-04-10T08:25:00",
    artisan_name: "Bhupathy",
    material_used: "Ivory Wood, Natural Lacquer, Vegetable Dyes",
    vara_nanya: 5
  },
  {
    product_id: 107,
    name: "Snail",
    price: 279,
    description: "A whimsical snail-shaped wooden toy.",
    category: "Toys",
    stock_quantity: 15,
    artisan_id: 7,
    image_url: Snail,
    created_at: "2025-04-10T08:30:00",
    artisan_name: "Bhupathy",
    material_used: "Ivory Wood, Natural Lacquer, Vegetable Dyes",
    vara_nanya: 5
  },
  {
    product_id: 108,
    name: "Soldiers",
    price: 499,
    description: "A set of miniature wooden soldier figurines, hand-painted.",
    category: "Toys",
    stock_quantity: 8,
    artisan_id: 8,
    image_url: Soldiers,
    created_at: "2025-04-10T08:35:00",
    artisan_name: "Bhupathy",
    material_used: "Ivory Wood, Natural Lacquer, Vegetable Dyes",
    vara_nanya: 5
  },
  {
    product_id: 109,
    name: "Train",
    price: 399,
    description: "Classic wooden train with compartments.",
    category: "Traditional Toys",
    stock_quantity: 10,
    artisan_id: 9,
    image_url: Train,
    created_at: "2025-04-10T08:40:00",
    artisan_name: "Bhupathy",
    material_used: "Ivory Wood, Natural Lacquer, Vegetable Dyes",
    vara_nanya: 5
  },
  {
    product_id: 110,
    name: "Train Engine",
    price: 499,
    description: "Handcrafted wooden engine with realistic rolling wheels.",
    category: "Traditional Toys",
    stock_quantity: 14,
    artisan_id: 10,
    image_url: TrainEngine,
    created_at: "2025-04-10T08:45:00",
    artisan_name: "Bhupathy",
    material_used: "Ivory Wood, Natural Lacquer, Vegetable Dyes",
    vara_nanya: 5
  },
  {
    product_id: 111,
    name: "Truck",
    price: 399,
    description: "Sturdy wooden truck with colorful design and smooth wheels.",
    category: "Toys",
    stock_quantity: 11,
    artisan_id: 11,
    image_url: Truck,
    created_at: "2025-04-10T08:50:00",
    artisan_name: "Bhupathy",
    material_used: "Ivory Wood, Natural Lacquer, Vegetable Dyes",
    vara_nanya: 5
  },
  {
    product_id: 112,
    name: "Veena",
    price: 699,
    description: "An elegant decorative miniature of the Veena instrument.",
    category: "Decor",
    stock_quantity: 5,
    artisan_id: 12,
    image_url: Veena,
    created_at: "2025-04-10T08:55:00",
    artisan_name: "Bhupathy",
    material_used: "Ivory Wood, Natural Lacquer, Vegetable Dyes",
    vara_nanya: 5
  },
  {
    product_id: 113,
    name: "Vintage Car",
    price: 549,
    description: "A stylish retro-style wooden car toy with detailed craftsmanship.",
    category: "Toys",
    stock_quantity: 9,
    artisan_id: 13,
    image_url: VintageCar,
    created_at: "2025-04-10T09:00:00",
    artisan_name: "Bhupathy",
    material_used: "Ivory Wood, Natural Lacquer, Vegetable Dyes",
    vara_nanya: 5
  },
];

export default products;
