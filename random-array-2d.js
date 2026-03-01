export default function randomArray2D(arraySize) {
  const array2D = [];
  for (let i = 0; i < arraySize; i++) {
    const array1D = [];
    for (let j = 0; j < arraySize; j++) {
      if (i > 0 && i < arraySize - 1 && j > 0 && j < arraySize - 1) {
        array1D.push(Math.floor(Math.random() * 2));
      } else {
        array1D.push(0);
      }
    }
    array2D.push(array1D);
  }
  return array2D;
}
