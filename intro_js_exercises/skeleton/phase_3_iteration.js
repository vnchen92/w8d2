Array.prototype.bubbleSort = function() {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.length-1; i++) {
            if (this[i] > this[i+1]) {
                [this[i], this[i+1]] = [this[i+1], this[i]];
                sorted = false;
            }
        }
    }
    return this;
}

// console.log([5,3,9,1,6,4].bubbleSort());

String.prototype.substrings = function() {
    let  arr = [];
    let str = new String("");
 
    for (let i = 0; i < this.length - 1; i++) {
 
         arr.push(this[i]);
         str += this[i];
 
     for (let j = i + 1; j < this.length ; j++ ) {  
 
             str += this[j]
             arr.push(str)
     }
             str = new String("")
    }
 
    return arr;
 }

