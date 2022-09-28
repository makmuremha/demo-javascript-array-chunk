export function generateArrayToChunk(dataArray, chunkSize) {
  let tempArrayChunk;
  let indexNumber = 0;
  const objectArray = {};
  for (let index = 0; index < dataArray.length; index += chunkSize) {
    tempArrayChunk = dataArray.slice(index, index + chunkSize);
    objectArray["items-" + indexNumber] = tempArrayChunk;
    indexNumber += 1;
  }
  const dataJson = {
    data: objectArray,
  };
  return JSON.stringify(dataJson);
}
