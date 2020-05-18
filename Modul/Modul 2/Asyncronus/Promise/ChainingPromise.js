const state = {
    isCoffeeMakerReady: true,
    sendStocks: {
        arabica: 250,
        robusta: 60,
        liberica: 80
    }
}


const getSeeds = (type, miligrams) => {
    return new Promise((resolved, reject) => {
        if (state.sendStocks[type] >= miligrams) {
            state.sendStocks[type] -= miligrams;
            resolved("Biji Kopi dibuatkan")
        } else {
            reject("Maaf stock kopi habis")
        }
    })
}

const makeCoffee = seeds => {
    return new Promise((resolved, reject) => {
        if (state.isCoffeeMakerReady) {
            resolved("Kopi Berhasil dibuat")
        } else {
            reject("Maaf mesin tidak dapat digunakan");
        }

    })
}

const servingToTable = coffee => {
    return new Promise((resolved, reject) => {
        resolved("Pesanan kopi sudah selesai")
    })
}

function reserveCoffee(type, miligrams) {
    getSeeds(type, miligrams)
    .then(makeCoffee)
    .then(servingToTable)
    .then(resolvedValue => {
        console.log(resolvedValue)
    })
    .catch(rejectReason => {
        console.log(rejectReason)
    });
}

reserveCoffee("liberica", 80);







