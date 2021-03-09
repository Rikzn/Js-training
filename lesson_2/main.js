// Task 1 
// let a = 7,
//     b = 9;
//     console.log(a * b);

// Task 2
// let c = 7,
//     d = 9;
//     console.log(c / d);

// Task 3
// let e = 3,
//     f = 5;
//     console.log(e + f);

// Task 4
// let e1 = "3",
//     f1 = 5;
//     console.log(e1 + f1);

// Task 5
// let e2 = 3,
//     f2 = 0;
//     console.log(e2 / f2);

// Task 6
// let e3 = 3,
//     f3 = "hello";
// console.log(e3 + f3);

// Task 7
// let e4 = 3,
//     f4 = "hello";
// console.log(e3 * f3);

// Task 8
// let input = document.querySelector('.input');
// let btn = document.querySelector('.btn');
// console.log(input);
// btn.addEventListener('click', () => {
//     console.log(input.value);
// });

// Task 9
// let text = document.querySelector('.text');
// btn.addEventListener('click', () => {
//     text.innerHTML = input.value;
//     input.value = '';
// });

// Task 10
// btn.addEventListener('click', () => {
//     text.innerHTML = +input.value * 10;
//     input.value = '';
// });


// Task 11
// btn.addEventListener('click', () => {
//     text.innerHTML = +input.value + 10;
//     input.value = '';
// });

// Task 12
// let input1 = document.querySelector('.input-1'),
    // input2 = document.querySelector('.input-2');
    // btn.addEventListener('click', () => {
    //     console.log('Hello' + ' ' + input1.value + ' ' + input2.value);
    //     input.value = '';
    // });


// Task 13
// btn.addEventListener('click', () => {
//     console.log(+input1.value + +input2.value);
//     text.innerHTML = (+input1.value + +input2.value);
//     input.value = '';
// });

// Task 14
// input.value = "hello";


// Task 15
// let y = document.querySelector('.input-1');
//     y.style.border = '2px solid red';

// Task 16
// btn.addEventListener('click', () => {
//     text.innerHTML = (+input1.value + +input2.value);
//     input.value = '';
// });

// Task 17
// btn.addEventListener('click', () => {
//     let t = input.value;
//     t = parseInt(t);
//     console.log(t);
//     input.value = '';
// });


// Task 18
// btn.addEventListener('click', () => {
//     let t = input.value;
//     t = parseFloat(t);
//     console.log(t);
//     input.value = '';
// });

// Task 19
// btn.addEventListener('click', () => {
//     text.innerHTML = (parseInt(input1.value) + parseInt(input2.value));
//     // let t = input.value;
//     // t = parseInt(t);
//     // console.log(t);
//     // input.value = '';
// });

// Task 20
let inputName = document.querySelector('.input-name'),
    inputSurname = document.querySelector('.input-surname'),
    inputAge = document.querySelector('.input-age'),
    inputClass = document.querySelector('.input-class'),
    btn = document.querySelector('.btn'),
    result = document.querySelector('.result');

    btn.addEventListener('click', () => {
        result.innerHTML = ('Уважаемый' + ' ' + inputName.value + ' ' + inputSurname.value + ' ' + 'ваш возраcт' + ' ' + inputAge.value + ' ' + 'года' + ' ' + 'по професси вы' + ' ' + inputClass.value);
    });
