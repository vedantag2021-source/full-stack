let a=5;
console.log(a,typeof a);
a='Hello';
console.log(a,typeof a);
a=true;
console.log(a,typeof a);
a=null;
console.log(a,typeof a);
a=undefined;
console.log(a,typeof a);
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------


//Object in Javascript
var myobj={
    name:"vedant",
    show:showname,
    occupation:"student",
    age:19
};
myobj.show();
function showname(){
    console.log(myobj.name);
}
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------


//Arrays in javascript
const arr=[1,2,3,4,5];
arr.push(0);
console.log(arr);
arr.pop();
console.log(arr);
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------

//WAP TO CHECK A NUMBER IS ARMSTRONG OR NOT

function isArmstrong(num){
    let sum=0;
    let temp=num;
    const numDigits = temp.toString().length;
    while(temp>0){
        let digit =temp%10;
        sum+=Math.pow(digit,numDigits);
        temp=Math.floor(temp/10);
    }
    return sum == num;
}
function checkandshow(){
    let val=document.getElementById("val").value;
    let para=document.createElement("p");
    if(isArmstrong(val)){
       para.textContent=val+" is an Armstrong number";
    }
    else{
         para.textContent=val+" is not an Armstrong number";
    }
    document.getElementById("result").appendChild(para);
}
//----------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------



let movies = [
    { name: "Inception", rating: 8.8 },
    { name: "The Dark Knight", rating: 9.0 },
    { name: "Interstellar", rating: 8.6 }
];


//WAP to create a timer for 15 min using setInterval and setTimeout. Display the passing time.
/*let seconds = 0;

let timer = setInterval(function () {
    seconds++;

    let minutes = Math.floor(seconds / 60);
    let sec = seconds % 60;

    console.log(minutes + " min " + sec + " sec");

}, 1000);

setTimeout(function () {
    clearInterval(timer);
    console.log("Timer finished!");
}, 15 * 60 * 1000);*/

let arr1 = [1, 2, 6, 4, 5];
arr1=arr1.sort((a, b) => a - b);
console.log(arr1);


