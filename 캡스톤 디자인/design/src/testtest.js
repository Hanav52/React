async function run () {
    console.log('start');
    let time = await setTimeout(1000);
    console.log('time : ' + 1000);
    time = await setTimeout(time + 1000);
    console.log('time : ' + 1000);
}


