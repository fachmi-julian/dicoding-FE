//=======================Destructuring Array=========================
// const favorites = ["Seafood","Salad","Nugget", "Soup"];

// const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

// console.log(firstFood);
// console.log(secondFood);
// console.log(thirdFood);
// console.log(fourthFood);

// /* output:
// Seafood
// Salad
// Nugget
// Soup
// */

// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
// const [, , thirdFood ] = favorites;
 
// console.log(thirdFood);
 
// /* output:
// Nugget
// */

//==========================Destructuring Assignment================
// const favorites = ["Seafood","Salad", "Nugget", "Soup"];
// let myFood = "ice Cream";
// let harFood = "Noodles";

// [myFood, harFood] = favorites;

// console.log(myFood);
// console.log(harFood);

// /* output:
// Seafood
// Salad
// */



//===============tanpa array==============
// var a = 1;
// var b = 2;
// var temp;

// console.log("Sebelum SWAP");
// console.log("Nilai a : " + a);
// console.log("Nilai b : " + b);

// temp = a;
// a = b;
// b = temp;

// console.log("Setelah SWAP");
// console.log("Nilai a : " + a);
// console.log("Nilai b : " +b);

// /* output
// Sebelum swap
// Nilai a: 1
// Nilai b: 2
// Setelah swap
// Nilai a: 2
// Nilai b: 1
// */

//===============Swap with array===================
// let a = 1;
// let b = 2;

// console.log("Sebelum swap")
// console.log("Nilai a : " + a);
// console.log("Nilai b : " + b);

// [a, b] = [b,a]

// console.log("Sesudah swap")
// console.log("Nilai a : " + a);
// console.log("Nilai b : " + b);

// /* output
// Sebelum swap
// Nilai a: 1
// Nilai b: 2
// Setelah swap
// Nilai a: 2
// Nilai b: 1
// */


//=====================Default Value================
// const favorites = ["Seafood"];

// const [myFood, harFood] = favorites;

// console.log(myFood);
// console.log(harFood);

// /* output:
// Seafood
// undefined
// */

// const favorites = ["Seafood"];

// const [myFood, harFood = "Salad" ] = favorites;

// console.log(myFood);
// console.log(harFood);
// /* output:
// Seafood
// Salad
// */





