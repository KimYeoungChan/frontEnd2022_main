'use strict';
// a_06_js_grammer_03.js

let a = 1;
let b = a;
console.log(a,b);
    a= 3;
console.log(a,b);

// -------------------------------
let arr = [1,3,5];
let arr2 = arr;
console.log(arr, arr2);
arr = [5,9,4]; // 값 자체를 바꾸는 형식
console.log(arr, arr2);


let brr = [2,5,7]; 
let brr2 = brr;
console.log(brr, brr2);
brr[0] = 9;
brr[1] = 4;
brr[5] = 0;
console.log(brr);
console.log(brr2);

let obj = {apple : 'red'}; 
let obj2 = obj; //참조가 아닌 값 전체를 변경할 때에는 let
console.log(obj, obj2);
    obj = {banana:'yellow'};
console.log(obj, obj2);

const pbj = {grape: 'purple'}; //내부 값(참조 변수)를 변경할 떄에는 const, 참조가 아닌 값 전체를 변경할 때에는 let 
const pbj2 = pbj;
console.log(pbj, pbj2);
    pbj.grape = 'green';
    pbj.banana = 'yellow';
    pbj.orange = 'orange';
    console.log(pbj, pbj2);

//--------------------------------------------------
console.clear();

let c = 5;
let d = c; // 값 자체를 통으로 copy해서 가져오는 변수 --> 깊은 복사

const objGroup = [5,7,3];
const objG2 = objGroup; // 주소지만 가져오는 참조변수 --> 얕은 복사
      objGroup[3] = 5;
console.log(objG2);
const objCopy = [];

for(let i=0; i<objGroup.length; i++){
  objCopy[i] = objGroup[i];
}
console.log(objCopy);
objGroup[3] = 12;
objGroup[2] = 1;
console.log(objGroup,objCopy);

const copyG = [...objGroup]; //ES6 ... : 
objGroup[2] = 100;
console.log(objGroup, copyG);

// ----------------------------------------------------------------
console.clear();

const coffeeMenu = ['americano', 'cafe latte', 'cafe mocha', 'esspresso', 'apogato', 'mlcha latte'];

let coffeelen = coffeeMenu.length;
for(let i=0; i<coffeelen; i++){
    console.log('menu : ', coffeeMenu[i]);
}

// for(let menu in coffeeMenu){
//     console.log(coffeeMenu[menu], typeof menu);
// }

//매개변수 : 실제 사용하는 기능을 변수로 임시매개체가 되는 형태
// 인수 : 던져주는 곳 , 인자: 받아서 사용하는 곳 
// 객체(coffeeMenu)를 선택하여 forEach 하겠습니다.
coffeeMenu.forEach(function(data, index){ 
    console.log(data,index);
});


// ------------------------------------------------------------
console.clear();

const maker = {
    'nike' : 'shoose',
    'apple' : 'phone',
    'samsung' : 'laptop',
}


// for in : 객체를 뽑아내기 위한 반복순환
for(let title in maker){
    console.log(maker[title]);
}

//  ★★★ for(배열,객체 반복 모두 가능), forEach(배열 반복 순환) ,for-in(객체 반복 순환) ★★★