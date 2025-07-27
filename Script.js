
// Assignment no 3
function filterAdults(users) {
  return users.filter(user => user.age > 18);
}

// Example:
const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 }
];

console.log(filterAdults(users));

// Assignment no 4
function sortProductsByPrice(products) {
  return products.sort((a, b) => a.price - b.price);
}

// Example:
const products = [
  { name: "Keyboard", price: 499 },
  { name: "Monitor", price: 8999 },
  { name: "Mouse", price: 299 }
];

console.log(sortProductsByPrice(products));

// Assignment no 5
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')  // remove special chars
    .trim()
    .replace(/\s+/g, '-');     // replace spaces with hyphens
}

// Example:
console.log(slugify("Learn    JavaScript in 30 Days!"));
//Assignment no 6
function groupByLength(words) {
  return words.reduce((acc, word) => {
    const len = word.length;
    acc[len] = acc[len] || [];
    acc[len].push(word);
    return acc;
  }, {});
}

// Example:
console.log(groupByLength(["dog", "apple", "sun", "table", "cat", "pie"]));
// Output: { 3: ["dog", "sun", "cat", "pie"], 5: ["apple", "table"] }


