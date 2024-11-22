

export const getTotalPrice = (products: Product[]): number => {
  return products.reduce((acc, product) => acc + product.price, 0);
};

export const isValidEmailRegex = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
};
