let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a !== 'number' || typeof b !== 'number') {
                return reject(new Error('Tham số phải là kiểu number'));
            }
            resolve(a + b);
        }, 2000);
    });
}

let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a !== 'number' || typeof b !== 'number') {
                return reject(new Error('Tham số phải là kiểu number'));
            }
            resolve(a * b);
        }, 2000);
    });
}

let divide = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a !== 'number' || typeof b !== 'number') {
                return reject(new Error('Tham số phải là kiểu number'));
            }
            if(b === 0) {
                return reject(new Error('Chia cho số 0'));
            }
            resolve(a / b);
        }, 2000);
    });
}

let tinhDienTich = (a, b, h) => {
    return add(a, b)
    .then(res => multiply(res, h))
    .then(res => divide(res, 2));
}

tinhDienTich(2, 3, '2')
.then(square => console.log('Dien tich la ' + square))
.catch(err => console.log(err + ''));

// (4 + 5 ) + 6

// add('4', 5)
// .then(res => add(res, 6))
// .then(result => console.log('ket qua: ' + result))
// .catch(err => console.log(err + ''));