Array.prototype.myEach = function(callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
    return this;
}

// console.log([1,2,3].myEach(element => {return element + 1}))

Array.prototype.myMap = function(callback) {
    let result = [];
    this.myEach(element => result.push(callback(element)));
    return result;
}

// console.log([1,3,4].myMap(element => {return element + 1}));

Array.prototype.myReduce = function(callback, initialValue = undefined) {
    if (initialValue === undefined) {
        initialValue = this.shift();
    }
    this.forEach(element => {
        initialValue = callback(initialValue, element);
    });
    return initialValue;
}

// console.log([1, 2, 3].myReduce(function(acc, el) {
//     return acc + el;
//   }));

// console.log([1, 2, 3].myReduce(function(acc, el) {
//     return acc + el;
//   }, 25));