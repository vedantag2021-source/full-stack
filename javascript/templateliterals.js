let op='GOOD';
let a=`GLA UNIVERSITY IS ${op}`;
console.log(a);
let title="Heading";
let img="https://picsum.photos/id/237/200/300";
let mycode=`<img src="${img}">
<h3>${title}</h3>
<p>DESCRIPTION</p>`;
document.getElementById("div").innerHTML=mycode;