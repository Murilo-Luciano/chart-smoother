# chart-smoother

A Node.js module that provides a function to smooth a set of points on a chart, using the Chaikin's algorithm

## Installation

To install the chart-smoother module, run the following command:

```bash
npm install chart-smoother
```

## Usage

The `chart-smoother` module exports a single function, `chartSmother(points, iterations)`, which takes an array of points and the number of smoothing iterations to perform. The function uses the Chaikin's algorithm to smooth the points.

### Chaikin's Algorithm

[Chaikin's algorithm](https://www.cs.unc.edu/~dm/UNC/COMP258/LECTURES/Chaikins-Algorithm.pdf) is an iterative procedure for curve smoothing. Given a set of points, the algorithm successively replaces each straight line segment connecting consecutive points with two new points, offset from the original line by a fraction of the line's length. The result is a smooth curve that approximates the original set of points.

Here's an example of how to use the `chart-smoother` module:

```javascript
const chartSmother = require("chart-smoother");

const points = [
  [0, 0],
  [2, 2],
  [3, 3],
  [4, 1],
  [5, 0],
  [6, 0],
];
const iterations = 2;

const smoothedPoints = chartSmother(points, iterations);

console.log(smoothedPoints);
// Output:
// [
//   [0, 0],
//   [0.5, 0.5],
//   [1.5, 1.5],
//   [2.25, 2.25],
//   [2.75, 2.75],
//   [3.25, 2.5],
//   [3.75, 1.5],
//   [4.25, 0.75],
//   [4.75, 0.25],
//   [5.25, 0],
//   [5.75, 0],
//   [6, 0],
// ]
```

## Contributing

Contributions to `chart-smoother` are always welcome! If you find a bug or have a feature request, please create an [issue](https://github.com/Murilo-Luciano/chart-smoother/issues/new) on GitHub. If you'd like to contribute code, please [fork](https://github.com/Murilo-Luciano/chart-smoother/fork) the repository and submit a pull request.

## License

`chart-smoother` is licensed under the MIT License.
