// try catch block to handle error
try {
  // function to generate array
  function generateChunkArray(lowNumber, highNumber) {
    if (lowNumber > highNumber) {
      throw Error("Minimum number is greater than maximum number");
    }

    if (typeof lowNumber === "number" && typeof highNumber === "number") {
      // loop to generate array
      let dataArray = [];
      for (let index = lowNumber; index <= highNumber; index++) {
        dataArray.push(index);
      }
      console.log("data array : ");
      console.log(dataArray);

      // set chunk size & any variables
      let chunkSize = 5;
      let indexNumber = 0;
      let tempArray;
      const objectArray = {};

      // loop to split array into chunks
      for (index = 0; index < dataArray.length; index += chunkSize) {
        tempArray = dataArray.slice(index, index + chunkSize);
        objectArray[indexNumber] = tempArray;
        console.log(`chunk array of index ${indexNumber} : ${tempArray}`);
        indexNumber += 1;
      }

      const dataJson = {
        titel: "A Simple Array Chunk",
        data: objectArray,
      };
      console.log(JSON.stringify(dataJson));
    } else {
      console.error("Please enter a valid number");
    }
  }
} catch (error) {
  console.error("Error: " + error);
}

generateChunkArray(1, 20);
