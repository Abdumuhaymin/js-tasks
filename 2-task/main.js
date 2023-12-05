let son = +prompt();
let b;
let c;
c = son % 10; //3
b = (son % 100) - c; //2
son = parseInt(son / 100); //1
b = b * 10;
b = b + son * 10;
console.log(b + c);
