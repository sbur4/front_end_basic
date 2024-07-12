/**
 *
 * @param number1: {Number}
 * @param number2: {Number}
 * @param number3: {Number}
 * @returns {Number}
 */
module.exports.getMin = function getMin(number1, number2, number3) {
    // Your implementation here

    return [number1, number2, number3].reduce(function (min, current) {
        return Math.min(min, current);
    });
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param z: {Number}
 * @returns {String}
 */
module.exports.evenOrOdd = function evenOrOdd(x, y, z) {
    // Your implementation here
    if (x % 2 === 0 && y % 2 === 0 && z % 2 === 0) {
        return "even";
    } else if (x % 2 !== 0 && y % 2 !== 0 && z % 2 !== 0) {
        return "odd";
    } else {
        return "even/odd";
    }
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param z: {Number}
 * @returns {String}
 */
module.exports.inOrOutRange = function inOrOutRange(x, y, z) {
    // Your implementation here
   // return (y >= x && y <= z) ? "In range" : "Out of range";
    if (y > x && y < z) {
        return "Out of range";
    } else {
        return "In range";
    }
};
