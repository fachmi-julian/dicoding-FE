//=================Spreading Operator=====================
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// console.log(...favorites);
// console.log(favorites[0], favorites[1], favorites[2], favorites[3]);
// /* output:
// Seafood Salad Nugget Soup
// */

//================= variadic functions=====================
// const numbers = [12, 32, 90, 12, 32];

// console.log(Math.max(...numbers));
// /* output
// 90
// */

//=================menggabungkan dua buah array=================
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];

console.log(allFavorites);