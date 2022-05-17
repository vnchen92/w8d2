Array.prototype.uniq = function() {
    let array = this;
    let uniqueArray = [];
    for (let i = 0; i < this.length; i++) {
        if (!uniqueArray.includes(this[i])) {
            uniqueArray.push(this[i]);
        }
    }
}

// console.log([1,2,2,3,3,3].uniq());

Array.prototype.twoSum = function() {
    let pairs = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i+1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                pairs.push([i, j]);
            }
        }
    }
    return pairs;
}

// console.log([1,-1,7,6,-7].twoSum());

Array.prototype.transpose = function() {
    let array = this;
    let newOuterLength = this[0].length;
    let newInnerLength = this.length;
    let transposed = [...Array(newOuterLength)].map(x => Array(newInnerLength));

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[0].length; j++) {
            transposed[j][i] = this[i][j];
        }
    }
    return transposed;
}

// console.log([[1,2,3],[4,5,6]].transpose());

