"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chartSmother = void 0;
/**
Smooths a chart by interpolating additional points between existing points.
@param {number[][]} points - The array of points to be smoothed.
@param {number} [iterations=1] - The number of smoothing iterations to perform. Defaults to 1.
@returns {number[][]} - The smoothed array of points.
@example
const points = [
  [0, 0],
  [2, 2],
  [3, 3],
  [4, 1],
];

const smoothedPoints = chartSmother(points)
console.log(smoothedPoints)
// => [ [ 0, 0 ], [ 0.5, 0.5 ], [ 1.5, 1.5 ], [ 2.25, 2.25 ], [ 2.75, 2.75 ], [ 3.25, 2.5 ], [ 3.75, 1.5 ], [ 4, 1 ] ]
*/
function chartSmother(points, iterations) {
    if (iterations === void 0) { iterations = 1; }
    if (iterations === 0) {
        return points;
    }
    var smoothedPoints = [points[0]];
    for (var i = 0; i < points.length - 1; i++) {
        var currentPoint = points[i];
        var nextPoint = points[i + 1];
        var currentX = currentPoint[0];
        var currentY = currentPoint[1];
        var nextX = nextPoint[0];
        var nextY = nextPoint[1];
        var firstNewPoint = [
            0.75 * currentX + 0.25 * nextX,
            0.75 * currentY + 0.25 * nextY,
        ];
        var secondNewPoint = [
            0.25 * currentX + 0.75 * nextX,
            0.25 * currentY + 0.75 * nextY,
        ];
        smoothedPoints.push(firstNewPoint, secondNewPoint);
    }
    smoothedPoints.push(points[points.length - 1]);
    return chartSmother(smoothedPoints, iterations - 1);
}
exports.chartSmother = chartSmother;
