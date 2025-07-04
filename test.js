
const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    
    let total = sum(14, 9);

    
    expect(total).toBe(23);
});

test("un euro deberia ser 1.07 dollars", () => {
    const fromEuroToDollar = require('./app.js').fromEuroToDollar;

    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;

    expect(dollars).toBeCloseTo(expected);
});

test("un euro deberia ser 146.26 japan yen", () => {
    const fromDollarToYen = require('./app.js').fromDollarToYen;

    const Yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;

    expect(Yen).toBeCloseTo(expected);
});

test("un yen deberia ser  0.00556 pounds", () => {
    const fromYenToPound = require('./app.js').fromYenToPound;

    const Pound = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87;

    expect(Pound).toBeCloseTo(expected);
});