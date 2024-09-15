function add(nums) {
  if (nums === "")  return 0;

  let delimiter = ",";
  if (nums.startsWith("//")) {
    const parts = nums.split("\n");
    delimiter = parts[0][2];  
    nums = parts[1];
  }

  
  const cleanedNumbers = nums.replace(/\n/g, ",");
  const numArr = cleanedNumbers.split(delimiter);


return numArr.reduce((acc,num)=> acc + parseInt(num),0)
}

module.exports = add;
