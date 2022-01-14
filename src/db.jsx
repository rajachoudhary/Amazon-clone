const ProductData = [
  {
    id: 1,
    product: "laptop",
    img: "https://m.media-amazon.com/images/I/61LWeYHoXXL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 1,
    discount: 54849,
    price: 67931,
    description:
      "HP Pavilion 14, Ryzen 5- 8GB RAM/512GB SSD 14 inch(35.6 cm) Laptop, FHD IPS Anti-Glare Display/BL KB/Alexa/B&O Audio/Fast Charge/250 nits/Win 11 ready/3D Metal design/Thin & light/1.41 kg, 14-ec0035AU",
    offer: 19,
    stock: true,
    title: "HP Pavilion 14, Ryzen 5- 8GB RAM/512GB SSD 14 inch(35.6 cm) Laptop",
    rating: 4.5,
    images: [
      "https://m.media-amazon.com/images/I/61LWeYHoXXL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61ltK1RM-eL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/51oYyNVaUkL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/718pVO7a5GL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61voPu7JodL._SX679_.jpg",
    ],
  },
  {
    id: 2,
    product: "laptop",
    img: "https://m.media-amazon.com/images/I/61BeBTB41DL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 1,
    discount: 29899,
    price: 59999,
    description:
      "(Renewed) Dell Latitude Laptop E5470 Intel Core i5 6th Gen. - 6200u Processor, 8 GB Ram & 256 GB SSD, 14.1 Inches HD Screen Notebook Computer",
    offer: 50,
    stock: true,
    title:
      "Dell Latitude Laptop E5470 Intel Core i5 6th Gen. - 6200u Processor",
    rating: 4,
    images: [
      "https://m.media-amazon.com/images/I/419x1ps8aFL._SS40_.jpg",
      "https://m.media-amazon.com/images/I/51ewS97d6mL._SS40_.jpg",
      "https://m.media-amazon.com/images/I/31iOXDMGU8S._SS40_.jpg",
      "https://m.media-amazon.com/images/I/21SFYKtGyWS._SS40_.jpg",
    ],
  },
  {
    id: 3,
    product: "laptop",
    img: "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY327_FMwebp_QL65_.jpg",
    quantity: 1,
    discount: 122900,
    price: 110900,
    description:
      "2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD) - Space Grey Laptop",
    offer: 10,
    stock: true,
    title:
      "2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM..",
    rating: 5,
    images: [
      "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Apple_EYE_2020/11-11-2020/AMZ_FamilyStripe_MacBook_Air_Retina_M1._CB415366413_.png",
      "https://m.media-amazon.com/images/I/51ewS97d6mL._SS40_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg",
      "https://m.media-amazon.com/images/I/41ePfTRprsL._SX38_SY50_CR,0,0,38,50_.jpg",
      "https://m.media-amazon.com/images/I/31bjKqlul6L._SX38_SY50_CR,0,0,38,50_.jpg",
      "https://m.media-amazon.com/images/I/311m3klP3oL._SX38_SY50_CR,0,0,38,50_.jpg",
    ],
  },
  {
    id: 4,
    product: "footware",
    img: "https://m.media-amazon.com/images/I/61yPG8Hpv2S._AC_UL480_FMwebp_QL65_.jpg",
    quantity: 1,
    discount: 100,
    price: 500,
    description: "Centrino 2377 Casual-Men's Shoes",
    offer: 10,
    stock: true,
    title: "Centrino 2377 Casual-Men's Shoes..",
    rating: 4.5,
    images: [
      "https://m.media-amazon.com/images/I/71nQF6t7DOL._SY695._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/510BFHSJzZL._US40_.jpg",
      "https://m.media-amazon.com/images/I/41Rvzok23dL._US40_.jpg",
    ],
  },
  {
    id: 5,
    product: "footware",
    img: "https://m.media-amazon.com/images/I/71WXgdmxWYL._AC_UL480_FMwebp_QL65_.jpg",
    quantity: 1,
    discount: 807,
    price: 2499,
    description: "SHOFIEE Girl's Black Fashion Sandal",
    offer: 68,
    stock: true,
    title: "SHOFIEE Girl's Black Fashion Sandal..",
    rating: 3,
    images: [
      "https://m.media-amazon.com/images/I/513ihX5-+jS._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/613AXa7KePL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/61NrAYxojhS._UL1500_.jpg",
    ],
  },
  {
    id: 6,
    product: "footware",
    img: "https://m.media-amazon.com/images/I/81C+g+HbI+L._AC_UL480_FMwebp_QL65_.jpg",
    quantity: 1,
    discount: 350,
    price: 550,
    description: "BOOMER CUBS Kids Girls Lovely Floral Pattern Shoes",
    offer: 68,
    stock: true,
    title: "BOOMER CUBS Kids Girls.",
    rating: 3,
    images: [
      "https://m.media-amazon.com/images/I/81C+g+HbI+L._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/81IZZNaCQnL._UY695_.jpg",
      "https://m.media-amazon.com/images/I/81LZuNsHj+L._UY695_.jpg",
      "https://m.media-amazon.com/images/I/71g2lHUx02L._UL1500_.jpg",
    ],
  },
  {
    id: 7,
    product: "bottom",
    img: "https://m.media-amazon.com/images/I/81DIXSYgDgL._UL1500_.jpg",
    quantity: 1,
    discount: 400,
    price: 500,
    description: "Cazibe Men's Relaxed Fit Track Pants",
    offer: 68,
    stock: true,
    title: "Cazibe Men's Relaxed Fit Track Pants",
    rating: 3,
    images: [
      "https://m.media-amazon.com/images/I/81DIXSYgDgL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/81i96fBwK5L._UX569_.jpg",
      "https://m.media-amazon.com/images/I/91HddjfDJNL._UX569_.jpg",
      "https://m.media-amazon.com/images/I/718I0ugl8SL._UX569_.jpg",
    ],
  },
  {
    id: 8,
    product: "bottom",
    img: "https://m.media-amazon.com/images/I/41fUlGuMBQL._AC_UL480_FMwebp_QL65_.jpg",
    quantity: 1,
    discount: 699,
    price: 799,
    description:
      "OM Traditional Design Stone & Beads Work Rakhi for BROTHER with Palazzo Solid Soft Rayon with Elastic Women's Plain Palazzo",
    offer: 13,
    stock: true,
    title:
      "OM Traditional Design Stone & Beads Work Rakhi for BROTHER with Palazzo Solid Soft Rayon with Elastic Women's Plain Palazzo",
    rating: 3,
    images: [
      "https://m.media-amazon.com/images/I/41fUlGuMBQL._AC_UL480_FMwebp_QL65_.jpg",
    ],
  },
  {
    id: 9,
    product: "bottom",
    img: "https://m.media-amazon.com/images/I/81EW8Z8b5qL._AC_UL480_FMwebp_QL65_.jpg",
    quantity: 1,
    discount: 699,
    price: 799,
    description:
      "Cotton Pajama Summer Wear Full Pants for Kids Printed Bottoms Pyjama Pjs Bottom Wear Unisex Night Suit Lowers for Girls Boys - Combo Pack Set of 5",
    offer: 13,
    stock: true,
    title: "Cotton Pajama Summer Wear Full Pants..",
    rating: 3,
    images: [
      "https://m.media-amazon.com/images/I/81rASpnDGSL._UL1500_.jpg",
      "https://m.media-amazon.com/images/I/818syuv90JL._UY741_.jpg",
      "https://m.media-amazon.com/images/I/71MgLGPlymL._UY741_.jpg",
    ],
  },
]
export { ProductData }
