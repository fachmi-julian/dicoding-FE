//================promise=======================
// function reserveACoffee(type, miligrams) {
//     getSeeds(type, miligrams)
//     .then(makeCoffee)
//     .then(servingToTable)
//     .then(resolvedValue => {
//       console.log(resolvedValue);
//     })
//     .catch(rejectedReason => {
//       console.log(rejectedReason);
//     })
//    }
    
//    reserveACoffee("liberica", 80);
    
//    /* output:
//    Pesanan kopi sudah selesai!
//    */

//==========================chaining promise async
// async function reserveACoffee(type, miligrams) {
//     try {
//       const seeds = await getSeeds(type, miligrams);
//       const coffee = await makeCoffee(seeds);
//       const result = await servingToTable(coffee);
//       console.log(result);
//     } catch(rejectionReason) {
//       console.log(rejectionReason);
//     }
//    }
    
//    reserveACoffee("liberica", 80);
    
   /* output:
   Pesanan kopi sudah selesai!
   */