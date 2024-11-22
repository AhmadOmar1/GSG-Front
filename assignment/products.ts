// TASK 4:

// to run products.ts file use the following command:

// tsc products.ts
// node products.js
interface Product {
  name: string;
  price: number;
}

const productCards: Product[] = [
  { name: "laptop", price: 1000 },
  { name: "mouse", price: 20 },
  { name: "keyboard", price: 50 },
];

const getTotalPrice = (products: Product[]): number => {
  return products.reduce((acc, product) => acc + product.price, 0);
};

console.log("🚀 ~ getTotalPrice ~ getTotalPrice:", getTotalPrice(productCards));

// TASK 5:
// 
const checkEmailValidity = (email: string): boolean => {
  //   without regex just for try
  const emailValidationParts = [".com", "@"];

  const invalidChars = ["!", "#", "$", "%", "^", "&", "*", "(", ")", "+"];

  const indexOfAt = email.indexOf("@");

  if (emailValidationParts.some((regex) => !email.includes(regex)))
    return false;

  if (invalidChars.some((char) => email.includes(char))) return false;

  if (indexOfAt > email.indexOf(".com")) return false;

  if (indexOfAt === 0) return false;

  if (email.length < 10) return false;

  const [firtPart, secondPart] = email.split("@");

  if (firtPart.length < 6 || secondPart.length < 4) return false;

  return true;
};

const isValidEmailRegex = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
};

const randomEmails = [
  "ahmad@example.com",
  "ahmad@example",
  "ahmadexample.com",
  "ahmad@example.",
  "ahmadexample@com",
  "ahmadexample@.com",
  "ahmadexample@com.",
  "ahmadexample@email..com",
];

randomEmails.forEach((email) => {
  console.log("🚀 ~ isValidEmailRegex ~ isValidEmailRegex", email, isValidEmailRegex(email));
});
