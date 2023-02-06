// -----------------Task 01-----------------

function mindGame(num){
    let variableMultiply = num * 3;
    let variableAdd = variableMultiply + 10;
    let variableDivide = variableAdd / 2;
    let variableSubtract = variableDivide - 5;

    return variableSubtract;
}


// -----------------Task 02-----------------
 
function evenOdd(str){

    if(str.length%2 == 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}


// -----------------Task 03-----------------

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


// -----------------Task 04-----------------

function findingBadData(arrayData){
    let count = 0;
    // counting the number of negative data using count variable and looping through the given array
    for(let i=0; i<arrayData.length; i++){
        if(arrayData[i]< 0){
            count++;
        }
        else{
        }
    }
   return count;
}


// -----------------Task 05-----------------

function gemsToDiamond(gems1, gems2, gems3){
    //multiplying gems power with the number of gems
    let diamondCount1= 21* gems1;
    let diamondCount2= 32* gems2;
    let diamondCount3= 43* gems3;
    let total = diamondCount1+ diamondCount2 +diamondCount3;
    if(total < 1000*2){
        return total;
    }
    else{
        let leftOutDiamond = total-2000;
        return leftOutDiamond;
    }
}