let son = +prompt();
let b;
let c;
c = son % 10; //3
b = (son % 100) - c; //2
son = parseInt(son / 100); //1
b = b / 10;
son = son * 100 + c * 10;
console.log(son + b);
