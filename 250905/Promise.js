function wakeUp() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("1. 일어났다");
            resolve();
        }, 1000);
    });
}

function brushTeeth() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("2. 이를 닦았다");
            resolve();
        }, 1000);
    });
}

function eatBreakfast() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("3. 아침을 먹었다");
            resolve();
        }, 1000);
    });
}

function goToWork() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("4. 출근했다");
            resolve();
        }, 1000);
    });
}

wakeUp()
    .then(brushTeeth)
    .then(eatBreakfast)
    .then(goToWork)