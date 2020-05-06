Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

function callback(ele) {
  return ele * 2;
}


Array.prototype.myMap = function (callback) {
  let array = [];
  this.myEach(ele => {
    array.push(callback(ele));
  })
  return array;
}
console.log([1, 2, 2, 3, 3, 3].myMap(callback))


Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;
  if (initialValue === undefined) {
    acc = this[0];
    this.slice(1, this.length).myEach(ele => {
      acc = callback(acc, ele);
    })
  } else {
    this.myEach(ele => {
      acc = callback(acc, ele);
    })
  }
  return acc;
}


console.log([1, 2, 3].myReduce(function (acc, el) { return acc * el; }));

console.log([1, 2, 3].myReduce(function (acc, el) { return acc - el; }, 25)); 