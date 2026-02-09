import { Tproducts } from "@/types/products";
import { 
  Smartphone, 
  Monitor, 
  Watch, 
  Camera, 
  Headphones, 
  Gamepad2 
} from "lucide-react";

export const productsData: Tproducts[] = [
  {
    id: 1,
    title: "iPhone 14 Pro Max",
    image: "https://www.citypng.com/public/uploads/preview/iphone-14-pro-and-max-deep-purple-png-704081694621850q0ub3cabmx.png",
    category: "Phone",
    brand: "Apple",
    icon: Smartphone,
    price: 1450,
    discount: 10,
    rating: 4.8,
    review: 1245,
    keySpecifications: {
      display: "6.7-inch Super Retina XDR",
      processor: "A16 Bionic",
      camera: "48MP + 12MP + 12MP",
      battery: "4323 mAh",
      storage: "256GB",
    },
    reviews: [
      {
        name: "Rahim Ahmed",
        comment: "Excellent camera quality and performance.",
        date: "2025-01-12",
        rating: 5,
      },
      {
        name: "Nusrat Jahan",
        comment: "Very smooth but expensive.",
        date: "2025-01-18",
        rating: 4.5,
      },
    ],
  },

  {
    id: 2,
    title: "Dell XPS 15",
    image: "https://p7.hiclipart.com/preview/910/21/274/laptop-dell-xps-15-computer-monitors-personal-computer-laptops.jpg",
    category: "Computer",
    brand: "Dell",
    icon: Monitor,
    price: 2100,
    discount: 15,
    rating: 4.6,
    review: 860,
    keySpecifications: {
      display: "15.6-inch 4K UHD",
      processor: "Intel Core i7 13th Gen",
      ram: "16GB",
      storage: "1TB SSD",
      graphics: "NVIDIA RTX 3050",
    },
    reviews: [
      {
        name: "Arif Khan",
        comment: "Perfect laptop for development and design.",
        date: "2025-02-01",
        rating: 5,
      },
      {
        name: "Sadia Islam",
        comment: "Battery life could be better.",
        date: "2025-02-05",
        rating: 4,
      },
    ],
  },

  {
    id: 3,
    title: "Apple Watch Series 9",
    image: "https://www.citypng.com/public/uploads/preview/apple-watch-series-9-stainless-steel-graphite-front-view-11694993739smzxyejruv.png",
    category: "SmartWatch",
    brand: "Apple",
    icon: Watch,
    price: 520,
    discount: 8,
    rating: 4.7,
    review: 540,
    keySpecifications: {
      display: "Always-On Retina",
      size: "45mm",
      sensors: "Heart Rate, ECG, Blood Oxygen",
      battery: "18 hours",
      connectivity: "GPS + Cellular",
    },
    reviews: [
      {
        name: "Tanvir Hasan",
        comment: "Very accurate health tracking.",
        date: "2025-01-20",
        rating: 5,
      },
    ],
  },

  {
    id: 4,
    title: "Canon EOS R50 Mirrorless Camera",
    image: "https://hnsgsfp.imgix.net/9/images/detailed/91/canon-eos-r50-aps-c-mirrorless-camera-body-only-black_1.jpg?fit=fill&bg=0FFF&w=1534&h=900&auto=format,compress",
    category: "Camera",
    brand: "Canon",
    icon: Camera,
    price: 980,
    discount: 12,
    rating: 4.5,
    review: 312,
    keySpecifications: {
      sensor: "24.2MP APS-C",
      video: "4K 30fps",
      autofocus: "Dual Pixel CMOS AF",
      weight: "375g",
      lensMount: "RF Mount",
    },
    reviews: [
      {
        name: "Imran Hossain",
        comment: "Great camera for beginners.",
        date: "2025-01-28",
        rating: 4.5,
      },
    ],
  },

  {
    id: 5,
    title: "Sony WH-1000XM5",
    image: "https://www.sonylatvija.com/image/1faff1a8d2f9b518cb2ef53f2c1d5af3?fmt=png-alpha&wid=960",
    category: "HeadPhone",
    brand: "Sony",
    icon: Headphones,
    price: 399,
    discount: 20,
    rating: 4.9,
    review: 2100,
    keySpecifications: {
      type: "Over-Ear",
      noiseCancellation: "Active Noise Cancellation",
      battery: "30 hours",
      connectivity: "Bluetooth 5.2",
      weight: "250g",
    },
    reviews: [
      {
        name: "Farhan Ali",
        comment: "Best noise cancelling headphones ever!",
        date: "2025-02-02",
        rating: 5,
      },
    ],
  },

  {
    id: 6,
    title: "PlayStation 5",
    image: "https://png.pngtree.com/png-vector/20200616/ourmid/pngtree-ps-5-or-playstation-5-png-set-with-game-controller-png-image_2256908.jpg",
    category: "Gaming",
    brand: "Sony",
    icon: Gamepad2,
    price: 620,
    discount: 5,
    rating: 4.8,
    review: 3300,
    keySpecifications: {
      processor: "AMD Ryzen Zen 2",
      gpu: "10.28 TFLOPs",
      storage: "825GB SSD",
      resolution: "4K Gaming",
      frameRate: "Up to 120fps",
    },
    reviews: [
      {
        name: "Sabbir Rahman",
        comment: "Lightning fast load times. Amazing console!",
        date: "2025-01-10",
        rating: 5,
      },
      {
        name: "Mehedi Hasan",
        comment: "Storage is a bit limited.",
        date: "2025-01-15",
        rating: 4.5,
      },
    ],
  },
];
