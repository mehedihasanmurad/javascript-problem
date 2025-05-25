
const heights2 = [167, 190, 120, 165, 137];

function lowestNumbers(heights){
    let minimumNumber = heights2[0];
    for(height of heights){
        if(height < minimumNumber){
            minimumNumber = height;
        }
    }
    return minimumNumber;
}

const lowest = lowestNumbers(heights2);
console.log("Lowest number of an array : ",lowest);