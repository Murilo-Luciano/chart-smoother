/**@todo: make recursive */
/**@todo: module export */
function chartSmoother(arr) {
  const result = [];

  for (var i = 0; i < arr.length; i++) {
    const currentPoint = arr[i];
    const nextPoint = arr[i + 1];
    if (!nextPoint) break;

    const currentX = currentPoint[0];
    const currentY = currentPoint[1];

    const nextX = nextPoint[0];
    const nextY = nextPoint[1];

    const newPoint = [
      currentX * (3 / 4) + nextX * (1 / 4),
      currentY * (3 / 4) + nextY * (1 / 4),
    ];

    result.push(newPoint);
  }

  result.push(arr[arr.length - 1]);
  result.unshift(arr[0]);

  return result;
}
