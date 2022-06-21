async function run () {
    console.log('start');
    let time = await setTimeout(1000);
    console.log('time : ' + 1000);
    time = await setTimeout(time + 1000);
    console.log('time : ' + 1000);
}
// async && await
/* await는 일반함수에 사용할 수 없습니다.. 비동기 함수이기 때문에 타이머 지정이 필요합니다.
   await는 promise()가 끝나야 실행이 됩니다. 비동기를 동기로 만들어주기 때문에
   await는 async가 붙은 함수에 포함 되어야 사용 할 수 있습니다.
   async가 붙은 함수는 명시적으로 promise()를 포함합니다.
*/