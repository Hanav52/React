const runCode = new Promise((resolve, reject) => {
    setTimeout(() => {
         let num = 10;
         if (num > 9) {
             resolve(num);
         }
         else {
             reject("error");
         }
    }, 1000);
});

runCode.then((item) => {
    console.log('success', item)
}, (err) => {
    console.log(err);
}).then(() => {
    console.log('by dave lee');
}, () => {
    console.log("error2");
})