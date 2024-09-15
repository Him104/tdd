function add(nums) {
  if (nums === "")  return 0;
  
  const cleanedNumbers = nums.replace(/\n/g, ",");
  const numArr = cleanedNumbers.split(",");


return numArr.reduce((acc,num)=> acc + parseInt(num),0)
}

module.exports = add;
