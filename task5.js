function gemsToDiamond(gems1, gems2, gems3){
    let diamond1= 21* gems1;
    let diamond2= 32* gems2;
    let diamond3= 43* gems3;
    let total = diamond1+ diamond2 +diamond3;
    if(total < 1000*2){
        return total;
    }
    else{
        let leftOutDiamond = total-2000;
        return leftOutDiamond;
    }
}

let v1=1;
let v2=1;
let v3=1;
let c= gemsToDiamond(v1, v2, v3);
console.log(c);