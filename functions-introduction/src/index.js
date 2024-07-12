/**
 *
 * @param str: {String}
 * @param symbolsCount: {Number}
 * @returns {String}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
    if (symbolsCount > str.length) {
        return str;
    } else {
        const backPart = str.slice(-symbolsCount);
        return backPart + str + backPart;
    }
};

/**
 *
 * @param z: {Number}
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.nearest = function nearest(z, x, y) {
    const diffX = Math.abs(x - z);
    const diffY = Math.abs(y - z);
    if (diffX < diffY) {
        return x;
    } else {
        return y;
    }
};

/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.removeDuplicate = function removeDuplicate(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
};
