// alert('works')


document.querySelector("#addTo").addEventListener('click', addToList)

function addToList (){
    //get value from input
    let task = document.querySelector("#toDoItems").value
    //create a new element
    let newTask = document.createElement("p")
    //print text to the list
    newTask.textContent = task
    //
    let list = document.querySelector("#listOfTasks")

    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    newTask.prepend(checkbox)
    list.appendChild(newTask)
    checkbox.addEventListener("change",()=>{
        if (checkbox.checked){
            newTask.classList.toggle("checked")
        }
    })
}

document.querySelector("#clearAll").addEventListener('click', clearAll)

function clearAll(){
    //what do we want to select? the list items
    let clear = document.querySelectorAll("p")
    //
    clear.forEach(function(p){ 
        p.remove()
    })

}

document.querySelector('#delete').addEventListener('click', deleteTask)

function deleteTask(){

    let deleteT = document.querySelectorAll("#listOfTasks .checked")
    deleteT.forEach(elementD => elementD.remove())
    

}

