// window.onload = function() {
//     resetState();
// };
let b;
let a = document.getElementById("id1");
let btn = document.getElementById("btn");
let output = document.getElementById("output");
function change()
{
    console.log(a);
     b = a.value;
}
function click()
{
    output.innerText = b;
    localStorage.setItem("task1",b);
    
}
a.addEventListener("input", change);
btn.addEventListener("click",click);
