const range = (start, end) => {
    if (start === end) {
        return [start];
    }

    let result = range(start, end - 1);
    result.push(end);
    return result;
}

// console.log(range(1, 3));

const sumRec = arr => {
    if (arr.length === 0) {
        return 0;
    }
    let num = arr.pop();

    return num += sumRec(arr);
}

console.log(sumRec([1, 2, 3]));