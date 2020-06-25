console.log("Lection_2");

x = 502;



// logic and

// result = x > 0 && x != 1000;
// console.log(result);

// A = x > 0;
// B = x <= 500;

// result = A && B;
// console.log(result);


// val = +prompt('Val = ', 988);

// console.log(val == NaN, isNaN(val) )
// if (!isNaN(val) && val != 1000) {
//     console.log('yohoo');
// } else {
//     console.log(val, ' is wrong');
// }



// logic or

// result = x > 10 || x < -50;

// result = 500;
// if (result < 0 || typeof result != 'number' || result >= 1000) {
//     console.warn('error')
// }


// --------------------------

// cycles


// цикл с предусловием

// while (условие) {
//     тело цикла
// }

i = 50;

while( i <= 10 ) {
    // console.log(i);
    i = i + 1;
}

// console.log('after', i);




// цикл с постусловием

// do {
//     тело цикла
// } while (условие)

// i = 0;
// do {
//     console.log(i);
//     i = i + 1;
// } while( i <= 10 )
// console.log('after', i);



// do {
//     x = prompt();

//     wrongStatus = isNaN(+x);
//     if (wrongStatus) {
//         console.warn(x, 'is wrong')
//     } else {
//         x = parseFloat(x);
//     }
// } while(wrongStatus);

// console.log(x);



// цикл с счетчиком

// for(1;2;3) {
//     4
// }

/*
    1 - начальных условий
    2 - условие выполнения цикла
    3 - действие между итерациями
    4 - тело цикла
*/

// for(i = 0; i <= 10; i++){
//     console.log(i);
// }

// console.log('after', i);

// i = i + 1;
// // инкримент 
// i++;
// // smart operation
// i += 1;


// --------------------------------------------------

// Array - структурный тип данных



example = [5, 6, 7, 8, 23, -5, 6, 7, 8, 5, 78, 7, 8, 5, 6, 7, 8];

console.log(example)
// console.log( example[2] );
// x = example[0]*25;
// console.log(x);
// example[3] = 0;
// console.log(example)

sum = 0;

for(i = 0; i < example.length; i++) {
    sum = sum + example[i];
}

console.log(sum);


// --------------------------------

max = example[0];
min = example[0];
for (i = 1; i < example.length; i++) {
    if (example[i] > max) {
        max = example[i];
    }

    if (example[i] < min) {
        min = example[i];
    }
}

console.log(max);
console.log(min);

// --------------------------------