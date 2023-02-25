// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    matrix = matrix.map(function (element, index) {
        if (index % 2 == 0) {
            return element;
        }
        return element.reverse();
    });
    return (matrix = matrix.flat());
};

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(module.exports(matrix));
