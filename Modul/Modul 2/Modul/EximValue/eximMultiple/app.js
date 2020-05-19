import {coffeeStock , isCoffeeMakerReady } from "./state.js";

console.log(coffeeStock)
console.log(isCoffeeMakerReady)

// // const displayStock = stock => {
// //     const coffeeStockListelement = document.querySelector('#coffee-stock-list');
// //     for (const type in stock) {
// //         const coffeeStockItemElement = document.createElement("li");
// //         coffeeStockItemElement.innerText = `${type}: ${stock[type]}`
// //         coffeeStockListelement.appendChild(coffeeStockItemElement)
// //     }
// // }

// // const coffeeOrder = (type, miligrams) => {
// //     return new Promise((resolve, reject) => {
// //         if (isCoffeeMakerReady) {
// //             if (coffeeStock[type] >= miligrams) {
// //                 resolve("Kopi Berhasil DI pesan")
// //             } else {
// //                 reject("Maaf Stok Kopi Habis")
// //             }
// //         } else {
// //             reject("Mesin Sedang Rusak")
// //         }
// //     })
// // }

// // const coffeOrderButtonEventHandler = async event => {
// //     const type = prompt("Kopi apa yang di pesan");
// //     const miligrams = prompt("Berapa miligrams?");
// //     try {
// //         const result = await coffeeOrder(type, miligrams);
// //         alert(result);
// //     } catch (rejectionReason) {
// //         alert(rejectionReason)
// //     }
// // } 

// // const coffeeOrderButtonElement = document.querySelector('#coffe-order-button');
// // coffeeOrderButtonElement.addEventListener("click", coffeOrderButtonEventHandler);

// // displayStock(coffeeStock)