function sum(num1, num2,callTo) {
    let result = num1 + num2;
    callTo(result)
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
    return 0;
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
/*in function call is the actual name and in function declaration and one more 
time in the function is the different name of our own*/
console.log(sum(1,7,displayResult))


function mul(a,b,callto){
    let ans=a*b;
    return ans;
    displaymul(ans)
    
    
}

function displaymul(data){
    console.log("ans is "+data)
}

function partialdisplaymul(data){
    console.log("mul's ans is "+data)
}

ans1=mul(89,2,displaymul)
console.log(ans1)
