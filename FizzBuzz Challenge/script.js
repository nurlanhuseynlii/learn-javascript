// for(let a = 0; a<=100; a++){

//     if(a % 3 === 0 && a % 5 === 0){
//         console.log('FizzBuzz');
//     }
//    else if (a % 3 === 0 ) {
//         console.log('fizz');
//     } else if(a % 5 === 0){
//         console.log('buzz');
//     } else{

//         console.log(a);
//     }
// }

let j = 1

    while(j <= 100){
        if(j % 3 === 0 && j % 5 === 0){
            console.log('FizzBuzz');
        }
       else if (j % 3 === 0 ) {
            console.log('fizz');
        } else if(j % 5 === 0){
            console.log('buzz');
        } else{
    
            console.log(j);
        }

        j++
    }