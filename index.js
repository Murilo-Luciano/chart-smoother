/**@todo: module export */
function chartSmother(points, iterations) {
  if (iterations === 0) {
    return points;
  }

  const smoothedPoints = [];

  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];

    const q1 = [0.75 * p1[0] + 0.25 * p2[0], 0.75 * p1[1] + 0.25 * p2[1]];

    const q2 = [0.25 * p1[0] + 0.75 * p2[0], 0.25 * p1[1] + 0.75 * p2[1]];

    smoothedPoints.push(q1, q2);
  }

  smoothedPoints.unshift(points[0]);
  smoothedPoints.push(points[points.length - 1]);

  return chartSmother(smoothedPoints, iterations - 1);
}
