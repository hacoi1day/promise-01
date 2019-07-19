// let square = (a, b, h) => (a + b) * h / 2;

// console.log('Diện tích: ' + square(2,3,2));

let add = (a, b, cb) => {
    setTimeout(() => {
        if(typeof a !== 'number' || typeof b !== 'number') {
            return cb(new Error('Tham số phải có kiểu number'));
        }
        cb(undefined, a + b);
    }, 1000);
}

let multiply = (a, b, cb) => {
    setTimeout(() => {
        if(typeof a !== 'number' || typeof b !== 'number') {
            return cb(new Error('Tham số phải có kiểu number'));
        }
        cb(undefined, a * b);
    }, 1000);
}

let divide = (a, b, cb) => {
    setTimeout(() => {
        if(typeof a !== 'number' || typeof b !== 'number') {
            return cb(new Error('Tham số phải có kiểu number'));
        }
        if(b === 0) {
            return cb(new Error('Chia cho 0'));
        }
        cb(undefined, a / b);
    }, 1000);
}

let tinhDienTichHinhThang = (a, b, h, cb) => {
    add(a, b, (err, result) => {
        if(err) return cb(err);
        multiply(result, h, (err, result) => {
            if(err) return cb(err);
            divide(result, 2, (err, square) => {
                if(err) return cb(err);
                cb(undefined, square);
            });
        });
    });
}

tinhDienTichHinhThang(2, '3', 2, (err, result) => {
    if(err) return console.log(err + '');
    console.log('Diện tích hình thang: ', result);
});