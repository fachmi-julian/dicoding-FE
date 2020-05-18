const getCake = callback => {
    let cake = null;
    console.log("Sedang membuat kue, silahkan tunggu ...");
    setTimeout(() => {
        cake = "Kue Selesai";
        callback(cake);
    }, 3000);
    return cake;
}

getCake(cake => {
    console.log(cake);
});
