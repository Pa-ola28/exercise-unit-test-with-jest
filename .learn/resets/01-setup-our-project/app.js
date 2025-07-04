// Esta es mi función que suma dos números
const sum = (a, b) => a + b;
module.exports = { sum };


// Objeto de tasas de conversión basado en 1 euro
const oneEuroIs = {
    JPY: 156.5,  // Yen japonés
    USD: 1.07,   // Dólar estadounidense
    GBP: 0.87    // Libra esterlina
};

// Conversión de euros a dólares
const fromEuroToDollar = (euros) => euros * 1.07;;

// Conversión de dólares a yenes (USD → EUR → JPY)
const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
};

// Conversión de yenes a libras (JPY → EUR → GBP)
const fromYenToPound = (yenes) => {
    const euros = yenes / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
};

// Exportar todas las funciones al final
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
    
};

