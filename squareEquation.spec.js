
const obj = require("./index.js").default;

describe('getDiscriminant', function () {
    test("SHOULD return -48 when a = 4, b = 4, c = 4", function() {
		expect(obj.getDiscriminant(4, 4, 4)).toEqual(-48);
    });

    test('SHOULD return 0 when a = 1, b = -2, c = 1', function() {
        expect(obj.getDiscriminant(1, -2, 1)).toEqual(0);
    });

    test('SHOULD return 12 when a = -5, b = 4, c = 1', function() {
        expect(obj.getDiscriminant(-5, 4, 1)).toEqual(36);
    });
});

describe('getRoot', function () {
    test('SHOULD return 1 when a = 3, b = -6', function() {
        expect(obj.getRoot(3, -6)).toEqual(1);
    });
});

describe('getFirstRoot', function () {
  test('SHOULD return -3 when a = 1, b = 1 , c = -6', function() {
expect(obj.getFirstRoot(1, 1, -6)).toEqual(-3);
    });
});

describe('getSecondRoot', function () {
    test('SHOULD return 2 when a = 1, b = 1 , c = -6', function() {
        expect(obj.getSecondRoot(1, 1, -6)).toEqual(2);
    });
});