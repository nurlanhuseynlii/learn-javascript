const numbers = [1,2,3,4,5,6,7,8,9,10];

// const sum = numbers.reduce((accumulatooor,  currenValue)=>{
//     return accumulatooor + currenValue
// }, 0)


// const sum = numbers.reduce((acc, curr) => acc +curr ,11)

// console.log(sum);


const sum3 =() =>{
    
    let acc = 0
    for(const curr of numbers){
        acc += curr
    }

    return acc
}

// console.log(sum3());


const card = [
    {id:1, name: 'Product 1', price: 101},
    {id:2, name: 'Product 2', price: 102},
    {id:3, name: 'Product 3', price: 103},
]

const total = card.reduce(function(acc , curr){
    return acc + curr.price
} ,0)

console.log(total);