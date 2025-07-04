
const sum = (a, b) => a + b;
module.exports = { sum };



const oneEuroIs = {
    JPY: 156.5,  
    USD: 1.07,   
    GBP: 0.87   
};


const fromEuroToDollar = (euros) => euros * 1.07;;


const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
};


const fromYenToPound = (yenes) => {
    const euros = yenes / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
};


module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
    
};

