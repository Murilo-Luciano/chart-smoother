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

const smoothedPoints = chartSmoother(points)
console.log(smoothedPoints)
// => [ [ 0, 0 ], [ 0.5, 0.5 ], [ 1.5, 1.5 ], [ 2.25, 2.25 ], [ 2.75, 2.75 ], [ 3.25, 2.5 ], [ 3.75, 1.5 ], [ 4, 1 ] ]
*/
export declare function chartSmoother(points: number[][], iterations?: number): number[][];
