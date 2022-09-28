import { generateArrayToChunk } from "./modules/generate-chunk.js";
// define variables the form element
const formElement = document.getElementById("array-chunk-form");

// define variables the result area
const areaResultArray = document.getElementById("result-array");
const areaResultJson = document.getElementById("result-json");

formElement.addEventListener("submit", (event) => {
  try {
    event.preventDefault();
    // define variables the input form element
    const chunkSize = document.getElementById("chunk-size").valueAsNumber;
    const lowNumber = document.getElementById("low-number").valueAsNumber;
    const highNumber = document.getElementById("high-number").valueAsNumber;

    if (!lowNumber) {
      throw new Error("low number is required");
    }

    if (!highNumber) {
      throw new Error("high number is required");
    }

    // function to generate array
    if (lowNumber > highNumber) {
      throw new Error("Minimum number is greater than maximum number");
    }

    if (typeof lowNumber === "number" && typeof highNumber === "number") {
      // loop to generate array
      let dataArray = [];
      for (let index = lowNumber; index <= highNumber; index++) {
        dataArray.push(index);
      }
      areaResultArray.innerHTML = "Array Result [" + dataArray + "]";

      const generateChunk = generateArrayToChunk(dataArray, chunkSize);
      areaResultJson.innerHTML = generateChunk;
    } else {
      console.error("Please enter a valid number ");
    }
  } catch (error) {
    console.error(error);
  }
});
