// TASK 2:
const numbers = [1, 2, 3, 4, 5];

const getSumAndAverage = (numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return { sum, average };
};

const { sum, average } = getSumAndAverage(numbers);
console.log(sum, average);

// TASK 3:
const dublicatesWords = [
    "ahmad",
    "omar",
    "ahmad",
    "omar",
    "ahmad",
    "omar",
    "ahmad",
    "omar",
    "ahmad",
    "omar",
];

// using set
const getUniqueWords = (words) => [...new Set(words)];

// using hashmap

const removeDublicates = (words) => {
    const uniqueWords = {};
    const uniqueWordsArray = [];
    words.forEach((word) => {
        if (!uniqueWords[word]) {
            uniqueWords[word] = true;
            uniqueWordsArray.push(word);
        }
    });

    return uniqueWordsArray;
};

console.log(removeDublicates(dublicatesWords));
