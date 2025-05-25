
function calculateElectronicsBudget(laptop,tablet,mobile){
    if(typeof laptop !== "number" || typeof tablet !== "number" || typeof mobile !== "number"){
        return "This is wrong value,please provide correct value";
    }
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const totalLaptop = laptopPrice * laptop;
    const totalTablet = tabletPrice * tablet;
    const totalMobile = mobilePrice * mobile;
    const totalBudget = totalLaptop + totalTablet + totalMobile;
    return totalBudget;
    
}

const totalBudget = calculateElectronicsBudget(1,2,1);
console.log("total budget is : ",totalBudget);