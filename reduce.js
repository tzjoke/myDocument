let data = [1, 2, 3]

const doubledReduce = data.reduce((acc, value) => {
    acc.push(value * 2)
    return acc
}, [])

const doubledMap = data.map((item) => item * 2)

const evensReduce = data.reduce((acc, value) => {
    if(value % 2 === 0){
        acc.push(value)
    }

    return acc
}, [])

const evensFilter = data.filter((item) => item % 2 === 0)

const sum = data.reduce((acc, value) => acc + value ,0)

sum
// 6

let list1 = [[0, 1], [2, 3], [4, 5]];

let list2 = [0, [1, [2, [3, [4, [5, [6]]]]]]];

const flatten = (arr) => {
    return arr.reduce(
        (acc, val) => {
            return acc.concat(Array.isArray(val) ? flatten(val) : val)
        }, []
    );
};

flatten(list1);
// [0, 1, 2, 3, 4, 5]

flatten(list2);
// [ 0, 1, 2, 3, 4, 5, 6 ]


let bigData = [];
for( let i=0; i<1000000; i++){
    bigData[i] = i;
}

console.time('bigData');
const filterMappedBigData = bigData.filter((value) => value % 2 === 0).map((value) => value * 2)
console.timeEnd('bigData');

console.time('bigDataReduce');
const reducedBigData = bigData.reduce((acc, value) => {
    if(value % 2 === 0){
        acc.push(value * 2)
    }
    return acc;
}, [])
console.timeEnd('bigDataReduce');

// bigData: 183.730ms
// bigDataReduce: 62.921ms