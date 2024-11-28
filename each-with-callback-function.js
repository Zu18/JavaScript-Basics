function count(arr, callback) {
    let count = 0;
    arr.forEach(element => {
        if (element === callback(element)) {
            count += 1;
        }
        return count;
    });

}

count([1, 2, 3, 4], e => e === 3) // output 1
