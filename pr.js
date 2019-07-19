let aPromise = new Promise((resolve, reject) => {
    // resolve('Success');
    setTimeout(() => {
        // reject(new Error('Connect do not exists'));
        resolve('Thành công');
    }, 2000);
    
});

aPromise.then((msg) => console.log('Đã thực thi ' + msg),
(err) => console.log(err + ''));