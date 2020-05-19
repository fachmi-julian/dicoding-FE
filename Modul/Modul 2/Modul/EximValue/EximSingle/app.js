import coffeStock from "./state";
import coffeeStock from "./state";

const displayStock = stock => {
    const coffeeStockListElement = document.querySelector('#coffee-stock-list');
    for (const type in stock) {
        const coffeeStockItemElement = document.createElement("li");
        coffeeStockItemElement.innerText = `${type}: ${stock[type]}`;
        coffeeStockListElement.appendChild(coffeeStockItemElement);
        
    }
}

displayStock(coffeeStock);