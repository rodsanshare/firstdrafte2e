//Practice from Pluralsight - API Design by Scott

var action = function (cb) {
    setTimeout(() => {
        cb('hey');
    }, 3000);
}

action(function (arg) {
    console.log(arg);
});

//test
var action2 = function (x) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (x === 1)
                resolve('hey2');
            else
                reject(new Error('Error has occurred.'));
        }, 3000);
    })

}

action2(1) //Play around with this parameter
    .then(function (word) {
        console.log(word);
    })
    .catch(function (err) {
        console.log(err);
    })