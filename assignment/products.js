// TASK 4:
var productCards = [
    { name: "laptop", price: 1000 },
    { name: "mouse", price: 20 },
    { name: "keyboard", price: 50 },
];
var getTotalPrice = function (products) {
    return products.reduce(function (acc, product) { return acc + product.price; }, 0);
};
console.log("🚀 ~ getTotalPrice ~ getTotalPrice:", getTotalPrice(productCards));
// TASK 5:
// 
var checkEmailValidity = function (email) {
    //   without regex just for try
    var emailValidationParts = [".com", "@"];
    var invalidChars = ["!", "#", "$", "%", "^", "&", "*", "(", ")", "+"];
    var indexOfAt = email.indexOf("@");
    if (emailValidationParts.some(function (regex) { return !email.includes(regex); }))
        return false;
    if (invalidChars.some(function (char) { return email.includes(char); }))
        return false;
    if (indexOfAt > email.indexOf(".com"))
        return false;
    if (indexOfAt === 0)
        return false;
    if (email.length < 10)
        return false;
    var _a = email.split("@"), firtPart = _a[0], secondPart = _a[1];
    if (firtPart.length < 6 || secondPart.length < 4)
        return false;
    return true;
};
var isValidEmailRegex = function (email) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};
var randomEmails = [
    "ahmad@example.com",
    "ahmad@example",
    "ahmadexample.com",
    "ahmad@example.",
    "ahmadexample@com",
    "ahmadexample@.com",
    "ahmadexample@com.",
    "ahmadexample@email..com",
];
randomEmails.forEach(function (email) {
    console.log("🚀 ~ isValidEmailRegex ~ isValidEmailRegex", email, isValidEmailRegex(email));
});
