
 
let a = document.getElementById("id1");
let btn = document.getElementById("btn");
let output = document.getElementById("output");
let del = document.getElementById("delete")
let clear= document.getElementById("clear");
 const addItem = document.createElement('li');
let tasks = JSON.parse(localStorage.getItem("tasks"))
  function saveTasks() {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

    function render (){
        output.innerHTML="";
     asks.forEach((data, index) => {
         const addItem = document.createElement('li');
         addItem.innerHTML= `
         <span>${data}</span>
         `
     });
     taskList.appendChild(addItem);
     saveTasks();
    }
function click()
 {
 var data = a.value.trim();
 if (data == " ")
        {
            alert("Enter the data");
            return;
        }
    tasks.push(data);
    data= "";
    renderTask();
    }
 
 
    btn.addEventListener("click",click);


a.addEventListener("input",addTask)
 





// function Delete(){
// localStorage.removeItem(key);
// }
// function Clear()
// {
//     localStorage.clear();
// }

// del.addEventListener('click',Delete);
// clear.addEventListener('click',Clear);



// btn.addEventListener("click",click);

// function click()
// {
//     // output.innerText = b;
//     d=localStorage.length;
//     c=localStorage.setItem(d,b);
//     const data = JSON.parse(localStorage.getItem("myData"));
//     if(data && Array.isArray(data)){
//         data.forEach(item => {
//         const li = document.createElement("li");
//         output.appendChild(li);
//     });
//     else{
//         output.innerHTML= "<li>No Data <li>";
//     }
// }

// function Delete(){
// localStorage.removeItem(key);
// }
// function Clear()
// {
//     localStorage.clear();
// }
// a.addEventListener("input", addTask);
// btn.addEventListener("click",click);
// del.addEventListener("click",Delete);
// clear.addEventListener("click",Clear);


