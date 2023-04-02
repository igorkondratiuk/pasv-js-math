function add(object,key,value){
    object[key]=value;
}
function reversObject(obj){
    const obj2={};
    Object.keys(obj).forEach(key => {
        obj2[obj[key]]=key;
        });
        return obj2;
}
function car(name, model, color, year) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.year = year;
}
function objectToString(obj){
    let str='';
    Object.keys(obj).forEach(key => {
        str+=`${key} - ${obj[key]}.`;
    });
    return str;
}

module.exports = {add,car,reversObject,objectToString};

// theCar = new car('Nissan', 'Altima', 'gold', 2013);
// const obj = {
//     name: 'Jean-Luc Picard',
//     rank: 'Captain',
//     age: 25,
//     power:'strong'
// };

// let arr={};
// add(arr,'age',25);
// console.log(arr);

// console.log(reversObject(obj));

//console.log(objectToString(theCar));