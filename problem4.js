const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones){
    let newArray = [];
    let sum = 0;
    for(const phone of phones){
        newArray.push(phone.price);
        sum = sum + phone.price;
    }
    const priceLength = newArray.length;
    const average = parseInt (sum / priceLength);
    return average;
}

const averagePrice = findAveragePhonePrice(phones);
console.log("Average Price is : ",averagePrice);