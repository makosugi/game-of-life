export default function changeArray2D(array2D) {
  const arraySize = array2D.length;
  const dummyArray2D = [];
  for (let i = 0; i < arraySize; i++) {
    const dummyArray1D = [];
    for (let j = 0; j < arraySize; j++) {
      if (i > 0 && i < arraySize - 1 && j > 0 && j < arraySize - 1) {
        dummyArray1D.push(checkArray2D(array2D, i, j));
      } else {
        dummyArray1D.push(0);
      }
    }
    dummyArray2D.push(dummyArray1D);
  }
  return dummyArray2D;
}
function checkArray2D(array2D, i, j) {
  const countAdjacent =
    array2D[i - 1][j - 1] + array2D[i - 1][j] + array2D[i - 1][j + 1] +
    array2D[i][j - 1] + array2D[i][j + 1] +
    array2D[i + 1][j - 1] + array2D[i + 1][j] + array2D[i + 1][j + 1];
  if (countAdjacent == 3) {
    return 1;
  } else if (array2D[i][j] == 1 && countAdjacent == 2) {
    return 1;
  } else {
    return 0;
  }
}
