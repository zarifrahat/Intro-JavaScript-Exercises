function range(start, end) {
    if (start === end) { 
        return [start];
    }
   return [start].concat(range(start+1, end));
}

// (1,1) =>[1]
// (1,2) =>[1,2]
// (1,3) =>[1,2,3]
// console.log(range(1,10));

function sumRec(arr){
    if (arr.length <= 1){
        return arr[0];
    }
    return arr.shift() + sumRec(arr);

}
// console.log(sumRec([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function exponent(base, exp){
    if (exp === 1){
        return base;
    }
    if (exp === 0){
        return 1;
    }

    return base * exponent(base, exp-1);

}

// console.log(exponent(2,3));

function fibonacci(n){
    if (n === 0) {
        return [];
    }
    if (n === 1){
        return [1];
    }

    if (n === 2){
         return [1, 1];    
    }
    
   let prev_fib_array = fibonacci(n-1);
    let sum = (prev_fib_array[prev_fib_array.length - 1] + prev_fib_array[prev_fib_array.length - 2]);
    prev_fib_array.push(sum);
   return prev_fib_array;
}

console.log(fibonacci(6));

function deepDup(arr){
    let dup = [];
    arr.forEach(element => {
        if (Array.isArray(element)){
            dup.push(deepDup(element));
        } else {
            dup.push(element);
        }
    });
    return dup;
}
// let original = [1, [2, 3], [4, 5, 6, [7, 8]]];
// let duped = deepDup([1,[2,3],[4,5,6,[7,8]]]);
let original = [[1], [2], [3]];
let duped = deepDup([[1], [2], [3]]);
console.log(original[0] === duped[0])

function bsearch(arr, target){
    let middle_idx = (arr.length /2);
    if (target === arr[middle_idx]){
        return middle_idx;
    }
    if (!arr.includes(target)) {
        return null;
    }

    if (target)


}
