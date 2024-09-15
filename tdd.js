function add(nums) {
  if (nums === "")  return 0;
  
const numArr = nums.split(",")

return numArr.reduce((acc,num)=> acc + parseInt(num),0)
}

module.exports = add;
