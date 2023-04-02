function findUniq(arr) {
  for(let i=0; i < arr.length; i++)
     if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]) )
     return arr[i];
}
function maxSum(arr){

    const arrOut = [];
    let pointInput;
   let pointOut;
   let count=0;
   let sum = arr[0];
   let max = arr[0];
   for (let i = 0; i < arr.length; i++){
    for(let u = i; u < arr.length - 1; u++){
      if(sum > max)pointOut = u;
      if(sum > max)max = sum;
      sum += arr[u+1];
      if(sum > max)pointOut = u;
      if(sum > max)max = sum;
    }
    sum = arr[i+1];
  }
  for(let y = pointOut+1; y>=0; y--){
    arrOut.unshift(arr[y]);
    count += arr[y];
    if(count === max){
        pointInput=y;
        break;
    }
  }
  let sumArr=0;
  for (let i=0;i<arr.length;i++) sumArr+=arr[i];

  arrOut.unshift(sumArr,max,pointInput,pointOut+1);
  return arrOut;
}
function randNumArr(num,max,min){
 let arr=[];
 for(let i=0;i<num;i++){
   let n=Math.floor(Math.random() * (max - min + 1)) + min;
   arr.push(n);
 }
  return arr;
}

module.exports = {findUniq,maxSum,randNumArr};