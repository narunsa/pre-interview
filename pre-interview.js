const myArray = [1, 2, 3, 4, 5, 6, 10, -5];
const getMaxNumber = () => {
  const maxNumber = Math.max(...myArray);
  console.log("Max value of", myArray, "is", maxNumber);
};

const myArray2 = [1, 2, 3, 4, 5, 6];
const getPairNumber = (sum, array) => {
  console.log("Pair number of", myArray2);
  const pairArray = [];
  for (const num of myArray2) {
    const findNumber = sum - num;
    if (myArray2.includes(findNumber)) {
      if (!pairArray.includes(findNumber) && !pairArray.includes(num)) {
        pairArray.push(num, findNumber);
        console.log(num, "+", findNumber);
      }
    }
  }
  // console.log(pairArray);
};

getMaxNumber();
getPairNumber(7, myArray2);
