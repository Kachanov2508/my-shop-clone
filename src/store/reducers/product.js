const PRODUCT = "PRODUCT";

const initialState = {
  title: "Вот такая карусель",
  price: {
    current: 234,
    old: 294
  },
  category: "Айрис-Пресс",
  image: "https://static.my-shop.ru/product/0/390/3896545_128.jpg"
};

const Product = (state = initialState, action) => {
  switch (action.tipe) {
    case PRODUCT: {
      console.log("Product reducer");
      break;
    }

    default:
      return state;
  }
};

export default Product;
