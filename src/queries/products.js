export const productsKeys = {
    getProducts: () => ["products"],
    getSingleProduct: (id) => [...productsKeys.getProducts(), id],
    //eso de arriba es lo mismo que hacer
  //getSingleProduct: (id) => ["products", id],
};