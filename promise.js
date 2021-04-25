function getAllPromises() {
    let a = new Promise((resolve, rejected) => {
        setTimeout(() => resolve(1), 1000);
    })
    let b = a.then(function(result) {
        console.log(result);
        return new Promise((resolve, rejected) => {
            setTimeout(() => resolve(result * 2), 1500);
        })
    })

    let c = a.then(function(result) {
        console.log(result);
        return new Promise((resolve, rejected) => {
            setTimeout(() => resolve(result * 2), 1000);
        })
    })

    let d = c.then(async(result) => {
        let result2 = result + await b.then(function(result) { return result });
        console.log(result2);
        return new Promise((resolve, rejected) => {
            setTimeout(() => resolve(result2), 1000);
        })
    })

    let e = d.then(function(result) {
        console.log(result);
        return new Promise((resolve, rejected) => {
            setTimeout(() => resolve(result), 1000);
        })

    }).catch(err => {
        console.log(err);
    });


}
module.exports = getAllPromises;