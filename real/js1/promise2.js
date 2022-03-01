const runCode = new Promise((resolve, reject) => {
    throw new Error('errordlqslek.');
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

Promise.then((num) => {
    console.log('success', num)
}).catch((error) => {
    console.log('test');
    console.log(error);
});