console.log('Hello world!');
document.write('Hello world!');

// console.log(10 + 20);
// console.log(10 / 20);
// console.log(-10 * 20);
// console.log(10 % 3); // mod
// console.log(15 % 4); // mod



// variables

a = 10;

// console.log(a);

a = 20;

// console.log(a);

a = a + 100; 

// console.log(a);



// data types

msg = "hello world";

// console.log( msg );

// ???????????

str = '100';
val = 205;

console.log( str + val ); // str + something ->  to string(something)
// 20 -> '20'

// конкатенация
console.log('Hello' + "_" + "world" + "!" );

// console.log(str - val);
// console.log(str * val);
// console.log(str / val);
// console.log("60" - "150");


// приведение типов

// str = '10s0';

// console.log( parseInt(str) );
// console.log( parseFloat(str) );

// result = parseInt(str) + val;
// console.log(result);


// result = +str + val;
// console.log(result);

// "100" + 305 -> "100305"
// +"100" + 305 -> (+1)*"100" + 305 ->  100 + 305

// ----------------------------------------------------
// NaN - Not a Number

// console.log('hello' - 100);

// ----------------------------------------------------

// myValue = prompt("INPUT PLS MY VALUE", "150");

// console.log(myValue);



// x = +prompt();
// y = +prompt();

// result = x + y;

// console.log("result = " + result);

// --------------------------------------------------
// boolean
// true false -> 1 0

// example = false;
// example = true;


/*
    >
    <
    >=
    <=
    !=
    ==
*/


// console.log( 10 > 15 );
// console.log( 10 != 15 );


// if 

// if (условие) {
//     блок кода
// }

// a = +prompt('a = ');
// console.log('before');
// if (a > 0) {
//     console.log('inner');
// }
// console.log('after');


x = +prompt();
y = +prompt();
znak = prompt("+ - * /");

console.log(x, znak, y);
if (znak == '-') {
    result = x - y;
} else if (znak == '+') {
    result = x + y;
} else if (znak == '*') {
    result = x * y;
} else if (znak == '/') {
    result = x / y;
}
console.log(result);

// if else

// if (условие) { 
//     блок кода 1
// } else { 
//     блок кода 2
// }

if (x > y) {
    console.log('x > y');
} else {
    console.log('x <= y');
}