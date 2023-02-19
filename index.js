/**@todo: module export */
function chartSmother(points, iterations) {
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

  return chartSmother(smoothedPoints, iterations - 1);
}

module.export = chartSmother;
