Array.prototype.uniq = function(){
    let array = [];
    this.forEach(ele => {
      if (!array.includes(ele)) {
        array.push(ele);
      }
    })
    return array;
}

// console.log([1,2,2,3,3,3].uniq())

Array.prototype.twoSum = function() {
  let array = []
  for(let i = 0; i < this.length - 1 ; i++) {
    for(let j = i + 1; j < this.length; j++) {
      if(this[i] + this[j] === 0) {
        array.push([i,j])
      }
    }
  }
  return array;
}

// console.log([1, -1, 2, 3, -3, 10].twoSum())

Array.prototype.transpose = function(){
  let array = [];
  for(let i = 0; i < this.length ; i++) {
    let row = [];
    for(let j = 0; j < this.length; j++) {
      row.push(this[j][i]);
    }
    
    array.push(row);
  }
  return array;
}
// original
// console.log([[0, 1, 2],[3, 4, 5], [6, 7, 8]].transpose())





