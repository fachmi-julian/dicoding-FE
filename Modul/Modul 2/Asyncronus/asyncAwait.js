//=======================================Promise======================
const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 1;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Coffee didapatkan")
            } else {
                reject("Biji kopi Habis");
            }
        }, 1000)
    })
}

//=======================================Promise======================
// function makeCoffee() {
//     getCoffee()
//     .then(coffee => {
//         console.log(coffee)
//     })
// }

// makeCoffee();

// /* output
// Coffee didapatkan!
// */


//=======================================Async Await======================
// async function makeCoffee() {
//     const coffee = await getCoffee();
//     console.log(coffee);
// }


//=======================================Async Await Handling Rejection======================
async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectReason) {
        console.log(rejectReason);
    }
}
makeCoffee();