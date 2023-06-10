import { chartSmother } from ".";

test("smoothes a set of points on one iteration", () => {
  const points = [
    [0, 0],
    [2, 2],
    [3, 3],
    [4, 1],
    [5, 0],
    [6, 0],
  ];

  const smoothedPoints = chartSmother(points);

  expect(smoothedPoints).toEqual([
    [0, 0],
    [0.5, 0.5],
    [1.5, 1.5],
    [2.25, 2.25],
    [2.75, 2.75],
    [3.25, 2.5],
    [3.75, 1.5],
    [4.25, 0.75],
    [4.75, 0.25],
    [5.25, 0],
    [5.75, 0],
    [6, 0],
  ]);
});

test("smoothes a set of points on two iteration", () => {
  const points = [
    [0, 0],
    [2, 2],
    [3, 3],
    [4, 1],
    [5, 0],
    [6, 0],
  ];

  const smoothedPoints = chartSmother(points, 2);

  expect(smoothedPoints).toEqual([
    [0, 0],
    [0.125, 0.125],
    [0.375, 0.375],
    [0.75, 0.75],
    [1.25, 1.25],
    [1.6875, 1.6875],
    [2.0625, 2.0625],
    [2.375, 2.375],
    [2.625, 2.625],
    [2.875, 2.6875],
    [3.125, 2.5625],
    [3.375, 2.25],
    [3.625, 1.75],
    [3.875, 1.3125],
    [4.125, 0.9375],
    [4.375, 0.625],
    [4.625, 0.375],
    [4.875, 0.1875],
    [5.125, 0.0625],
    [5.375, 0],
    [5.625, 0],
    [5.8125, 0],
    [5.9375, 0],
    [6, 0],
  ]);
});
