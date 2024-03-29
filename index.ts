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
export function chartSmoother(points: number[][], iterations = 1): number[][] {
  if (iterations === 0) {
    return points;
  }

  const smoothedPoints = [points[0]];

  for (let i = 0; i < points.length - 1; i++) {
    const currentPoint = points[i];
    const nextPoint = points[i + 1];

    const currentX = currentPoint[0];
    const currentY = currentPoint[1];

    const nextX = nextPoint[0];
    const nextY = nextPoint[1];

    const firstNewPoint = [
      0.75 * currentX + 0.25 * nextX,
      0.75 * currentY + 0.25 * nextY,
    ];

    const secondNewPoint = [
      0.25 * currentX + 0.75 * nextX,
      0.25 * currentY + 0.75 * nextY,
    ];

    smoothedPoints.push(firstNewPoint, secondNewPoint);
  }

  smoothedPoints.push(points[points.length - 1]);

  return chartSmoother(smoothedPoints, iterations - 1);
}
