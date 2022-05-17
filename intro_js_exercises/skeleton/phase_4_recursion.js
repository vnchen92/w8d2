const range = (start, end) => {
    if (start === end) {
        return [start];
    }

    let result = range(start, end - 1);
    result.push(end);
    return result;
}

console.log(range(1, 3));