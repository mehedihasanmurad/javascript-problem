
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(names){
    let small = heights2[3];
    for(let i = 0; i < names.length; i++){
         if(names[i].length < small.length){
         small = names[i];
        }
    }
    return small;
    
}

const smallName = smallestName(heights2);
console.log("Small name is : ",smallName);