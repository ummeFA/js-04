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

let a=[-1, 57, 21, -7, -100];
let c= findingBadData(a);
console.log(c);