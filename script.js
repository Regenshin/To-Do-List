const input = document.getElementById("input"); 
const listcontainer = document.getElementById("tasks"); 

function addt() {
    if (input.value === '') {
        alert("Write a task you want to do.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)

        
    }
    input.value = '';
    save();
}

listcontainer.addEventListener("click", function(e){
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    save();
}
else if (e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    save();
}



}, false);

function save(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function show(){
    listcontainer.innerHTML=localStorage.getItem("data");


}

show();