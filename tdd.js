function add(nums) {
  if (nums === "")  return 0;

  let delimiter = ",";
  if (nums.startsWith("//")) {
    const parts = nums.split("\n");
    delimiter = parts[0][2];  
    nums = parts[1];
  }

  
  const cleanedNumbers = nums.replace(/\n/g, delimiter);
  const numArr = cleanedNumbers.split(delimiter).map(num => parseInt(num))

  const negatives = numArr.filter(num => num < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }


return numArr.reduce((acc,num)=> acc + num,0)
}

module.exports = add;
