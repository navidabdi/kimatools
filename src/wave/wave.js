import { computeControlPoints } from './bezier-spline.js'

const defaultOptions = {}
const svgns = 'http://www.w3.org/2000/svg'

function generatePoints(width, height, segmentCount, layersCount, variance) {
  const cellWidth = width / segmentCount
  const cellHeight = height / layersCount
  const moveLimitX = cellWidth * variance * 0.5
  const moveLimitY = cellHeight * variance

  const points = []
  for (let y = cellHeight; y < height; y += cellHeight) {
    let pointsPerLayer = []
    pointsPerLayer.push({ x: 0, y: Math.floor(y) })
    for (let x = cellWidth; x < width; x += cellWidth) {
      const varietalY = y - moveLimitY / 2 + Math.random() * moveLimitY
      const varietalX = x - moveLimitX / 2 + Math.random() * moveLimitX
      pointsPerLayer.push({
        x: Math.floor(varietalX),
        y: Math.floor(varietalY),
      })
    }
    pointsPerLayer.push({ x: width, y: Math.floor(y) })
    points.push(pointsPerLayer)
  }
  return points
}

function generateClosedPath(
  curvePoints,
  leftCornerPoint,
  rightCornerPoint,
  fillColor,
  strokeColor,
  strokeWidth,
  transform
) {
  const xPoints = curvePoints.map((p) => p.x)
  const yPoints = curvePoints.map((p) => p.y)

  const xControlPoints = computeControlPoints(xPoints)
  const yControlPoints = computeControlPoints(yPoints)

  let path =
    `M ${leftCornerPoint.x},${leftCornerPoint.y} ` +
    `C ${leftCornerPoint.x},${leftCornerPoint.y} ` +
    `${xPoints[0]},${yPoints[0]} ` +
    `${xPoints[0]},${yPoints[0]} `

  for (let i = 0; i < xPoints.length - 1; i++) {
    path +=
      `C ${xControlPoints.p1[i]},${yControlPoints.p1[i]} ` +
      `${xControlPoints.p2[i]},${yControlPoints.p2[i]} ` +
      `${xPoints[i + 1]},${yPoints[i + 1]} `
  }

  path +=
    `C ${xPoints[xPoints.length - 1]},${yPoints[xPoints.length - 1]} ` +
    `${rightCornerPoint.x},${rightCornerPoint.y} ` +
    `${rightCornerPoint.x},${rightCornerPoint.y} Z`;

  return {
    fill: fillColor,
    strokeColor: strokeColor,
    strokeWidth: strokeWidth,
    d: path,
    transform: transform
  }
}

export default function wavery(properties) {
  const {
    width, 
    height, 
    segmentCount, 
    layersCount,
    fillColor, 
    strokeColor, 
    strokeWidth, 
    transform,
    variance
  } = { ...defaultOptions, ...properties };
  
  const points = generatePoints(
    width, 
    height, 
    segmentCount, 
    layersCount, 
    variance
  );

  function generateSvg() {
    const svg = document.createElementNS(svgns, 'svg');
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    svg.setAttribute('xmlns', svgns);

    const pathList = [];
    for (let i = 0; i < points.length; i++) {
      pathList.push(
        generateClosedPath(
          points[i],
          { x: 0, y: height },
          { x: width, y: height },
          fillColor,
          strokeColor,
          strokeWidth,
          transform
        ),
      )
    }

    return {
      svg: {
        width: width,
        height: height,
        xmlns: svgns,
        path: pathList,
      }
    };
  }

  return {
    generateSvg
  };
}