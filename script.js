// window.onload = function() {
//     resetState();
// };
let b;
let a = document.getElementById("id1");
let btn = document.getElementById("btn");
let output = document.getElementById("output");
let del = document.getElementById("delete")
let clear= document.getElementById("clear");

let c;
let d;
let e;
function change()
{
    console.log(a);
     b = a.value;
}
function click()
{
    // output.innerText = b;
    d=localStorage.length;
    c=localStorage.setItem(d,b);
    const data = JSON.parse(localStorage.getItem("myData"));
    if(data && Array.isArray(data)){
        data.forEach(item => {
        const li = document.createElement("li");
        output.appendChild(li);
    });
    else{
        output.innerHTML= "<li>No Data <li>";
    }
}

function Delete(){
localStorage.removeItem(key);
}
function Clear()
{
    localStorage.clear();
}
a.addEventListener("input", change);
btn.addEventListener("click",click);
del.addEventListener("click",Delete);
clear.addEventListener("click",Clear);


