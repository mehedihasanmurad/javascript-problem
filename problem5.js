const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function monthlySalary(employees){
    let monthlySalary = 0;
    for(const employee of employees){
        const startingSalary = employee.starting;
        const perYearsSalary = employee.experience * employee.increment;
        const newSalary = startingSalary + perYearsSalary;
        console.log(`${employee.name} present salary : ${newSalary}`)
        monthlySalary = newSalary + monthlySalary;
    }
    return monthlySalary;
}

const monthlyCost = monthlySalary(employees);
console.log("Monthly Cost of Company'r : ",monthlyCost);