let arr = [4,5,1,1,3,6,2,1,5,4,3];

// arr.forEach(item => console.log(item));
// console.log(arr);
// var nhan2 = e => e*2;
// var arr2 = arr.map(nhan2);
// console.log(arr2);

// function add(a, b) {
//     return a + b;
// }

// let add = (a, b) => a + b;
// console.log(add(1,2));

let getFunction = (num) => {
    if(num >= 0)
        return () => console.log('Số dương');
    return () => console.log('Số âm');
}

getFunction(-1)();

let a = () => {};

console.log(a());