let myList = [0, 1, 5, 2, 0, 55, 32 ,1, 2,3,4,5];
const findSmallestIndex = (myList) =>
{
    let smallestElement = myList[0];
    let smallestIndex = 0;

    for (let i = 1; i < myList.length; i++) 
    {
        if (myList[i] < smallestElement) 
        {
          smallestElement = myList[i];
          smallestIndex = i;
        }
    }
    return smallestIndex
}

const selectionSrort = (myList) =>
{
const sortedArray = [];
const copyArray = [...myList]

    for (let i = 0; i < myList.length; i++)
        {
            const smallestIndex = findSmallestIndex(copyArray);
            sortedArray.push(copyArray.splice(smallestIndex, 1)[0]);
        }
return sortedArray;
};
const binarySearch = (sortedArray, target) => {
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
        if (sortedArray[mid] === target)
        {
        return mid;
        }
        else if (sortedArray[mid] < target) 
        {
        left = mid + 1;
        } 
        else 
        {
        right = mid - 1;
        }
    }
  
    return -1;
  };
  
  const sortedArray = selectionSrort(myList);
  const targetValue = 5;
  
  const result = binarySearch(sortedArray, targetValue);
  
  if (result !== -1) {
    console.log(`Value ${targetValue} found at index ${result}.`);
  } else {
    console.log(`Value ${targetValue} not found in the array.`);
  }