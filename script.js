let inputBox = document.getElementById("inputBox");
let inputAdd = document.getElementById("inputAdd");


function addButton(){
if(inputBox.value == ""){
    alert("Add the taxk")
}
else{
    let li = document.createElement('li')
    li.innerHTML=inputBox.value;
    inputAdd.appendChild(li);
    
    let span = document.createElement("span")
    span.innerHTML= "\u00d7";
    li.appendChild(span);

}
inputBox.value="";
saveData();
}

inputAdd.addEventListener("click", function(e){
   if(e.target.tagName==="LI"){
        e.target.classlist.toggle("checked");
        saveData();
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        
        saveData();
    }
},false);

function saveData()
{
    if(inputAdd){
localStorage.setItem("data",inputAdd.innerHTML);
}}
function getData()
{
    if(inputAdd){
    inputAdd.innerHTML=localStorage.getItem("data");
}}
getData();
if (inputBox) { 
    inputBox.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addButton();
        }
    });
}