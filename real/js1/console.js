// console.log('안녕하세요')
// setTimeout(() => {
//    console.log('dave lee입니다.') 
// }, 3000);

// console.log('잔재미코딩입니다.');

function funcl(callback) {
    setTimeout(() => {
        console.log("func");
        callback();
    }, 1000);
}
function func2() {
    console.log("func2");
}

funcl(func2);