function wakeUp(callback) {
    setTimeout(() => {
        console.log("1. 일어났다");
        callback();
    }, 1000);
}

function brushTeeth(callback) {
    setTimeout(() => {
        console.log("2. 이를 닦았다");
        callback();
    }, 1000);
}

function eatBreakfast(callback) {
    setTimeout(() => {
        console.log("3. 아침을 먹었다");
        callback();
    }, 1000);
}

function goToWork() {
    setTimeout(() => {
        console.log("4. 출근했다");
    }, 1000);
}
wakeUp(() => {
    brushTeeth(() => {
        eatBreakfast(() => {
            goToWork();
        });
    });
});