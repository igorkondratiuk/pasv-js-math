function revers(string){
 let arr = string.split(' ');
 for(let i=0; i < arr.length; i++)
    arr[i] = arr[i].split('').reverse().join('');
 return arr.join(' ');
}
function rot13(message){
  let m=Array.from(message);
  for (let i=0; i < message.length; i++){
    let l = message.charCodeAt(i);
    if(l >= 65 && l <= 90)    m[i]=String.fromCharCode(65 + (l - 65 + 13) % 26);
     else if(l>=97 && l<=122) m[i]=String.fromCharCode(97 + (l - 97 + 13) % 26);
    }
  return m.join('');
}
function firstBig(str) {
  let arrstr=str.split(' ');
  for(let i=0;i<arrstr.length;i++){
    let arr=Array.from(arrstr[i]);
     arr[0]=arr[0].toLocaleUpperCase();
     arrstr[i]=arr.join('');
  }
  arrstr=arrstr.join(' ');
  return arrstr;
};

module.exports = {revers,rot13,firstBig};