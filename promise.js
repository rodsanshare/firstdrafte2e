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
var action2 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('hey2');
        }, 3000);
    })

}

action2()
    .then(function (word) {
        console.log(word);
    })