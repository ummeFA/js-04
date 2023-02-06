function mindGame(num){
    let variableMultiply = num * 3;
    let variableAdd = variableMultiply + 10;
    let variableDivide = variableAdd/ 2;
    let variableSubtract = variableDivide - 5;

    return variableSubtract;
}

let n=5;
let v= mindGame(n);
console.log(v);