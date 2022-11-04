var annonUser = function (num) {
    for (var i = 0; i < num; i++) {
        alert('HIIIII!');
    }
};
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
var neverStop = function () {
    while (true) {
        console.log("i am still going");
    }
};
function makeError(msg) {
    throw new Error(msg);
}
function gameloop() {
    while (true) {
        console.log("game loop running!");
    }
    return true; // error shows as never to be returned
}
