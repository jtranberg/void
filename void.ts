const annonUser = (num:number): void => {
    for(let i = 0; i < num; i++) {
        alert('HIIIII!');
    }
}

function printTwice(msg:string): void  {     //does not return anything
    console.log(msg);
    console.log(msg);
}

const neverStop = (): never => {
    while(true) {
        console.log("i am still going");
    }
}

function makeError(msg: string): never {
    throw new Error(msg);
}

function gameloop(): never {
  while(true) {
    console.log("game loop running!");
  }
  return true     // error shows as never to be returned
}