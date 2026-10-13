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