Array.prototype.bubbleSort = function () {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.length; i++) {
            if (this[i] > this[i + 1]) {
                [this[i], this[i + 1]] = [this[i + 1], this[i]];
                sorted = false;
            }
        }
    }
    return this;
}

// console.log([2, 7, 3, 8, 1, -1].bubbleSort());

String.prototype.subStrings = function () {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        array.push(this[i]);
        for (let j = i + 1; j < this.length; j++) {
            let sub = this.slice(i, j + 1);
            array.push(sub);
        }
    }
    return array;
}

console.log("butterfly".subStrings());