const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Kopi Berhasil dibuat");
    } else {
        reject("Mesin Kopi tidak Bisa digunakan")
    }
}

const handlerSuccess = resolvedValue => {
    console.log(resolvedValue)
}

const handlerReject = rejectReason => {
    console.log(rejectReason)
}

const makeCoffee = new Promise(executorFunction);
makeCoffee
.then(handlerSuccess)
.catch(handlerReject);