/*
Este archivo exporta una función que retorna una promesa
que se resuelve siempre después del tiempo establecido en setTimeout
y resuelve el array de productos
*/

let products = [
  {
    id: "1",
    name: "iPhone 15",
    price: "1000",
    category: "smartphones",
    stock: "25",
    description: "Potente smartphone con características avanzadas.",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702748",
  },
  {
    id: "2",
    name: "Samsung Galaxy S22",
    price: "900",
    category: "smartphones",
    stock: "30",
    description: "Innovador smartphone con pantalla de alta resolución.",
    img: "https://itoutlet.ie/wp-content/uploads/2023/11/samsung-galaxy-s22-s901b-5g-8gb-128gb-black.png",
  },
  {
    id: "3",
    name: "MacBook Pro 2023",
    price: "2000",
    category: "laptops",
    stock: "15",
    description: "Portátil de alto rendimiento para profesionales creativos.",
    img: "https://media.currys.biz/i/currysprod/10246971?$l-large$&fmt=auto",
  },
  {
    id: "4",
    name: "Sony 65-Inch 4K Smart TV",
    price: "1200",
    category: "tv",
    stock: "20",
    description: "Experiencia visual inigualable con resolución 4K.",
    img: "https://hniesfp.imgix.net/8/images/detailed/716/01_Hero_Image_h7f9-4v.jpg?fit=fill&bg=0FFF&w=1500&h=1000&auto=format,compress",
  },
  {
    id: "5",
    name: "Canon EOS R5",
    price: "2500",
    category: "camera",
    stock: "10",
    description:
      "Cámara profesional con capacidades de grabación de alta calidad.",
    img: "https://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_square_32c26ad194234d42b3cd9e582a21c99b",
  },
  {
    id: "6",
    name: "Dyson V11 Vacuum Cleaner",
    price: "600",
    category: "appliances",
    stock: "40",
    description: "Aspiradora potente y eficiente para el hogar.",
    img: "https://cdn11.bigcommerce.com/s-8ek7z3h3jn/images/stencil/1280x1280/products/9005/50066/dyson-v11-vacuum-cleaner-or-447029-01__13280.1688188070.jpg?c=1",
  },
];

export const getProducts = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(products);
        }, 1500)
    })
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id == id));
    }, 500)
  })
}

export const getProductByCategory = (category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        products.filter((product) => product.category == category)
      )
    }, 500)
  })
}