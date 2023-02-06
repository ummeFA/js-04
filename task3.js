function isLGSeven(value){
 const differenceValue = value - 7;
 const absoluteValue = Math.abs(differenceValue);
 if (absoluteValue < 7){
    return differenceValue;
 }
 else{
    const doubleValue = absoluteValue*2;
    return doubleValue;
 }
}

// let vari= 6;
let vari2 = isLGSeven(6);
console.log(vari2);