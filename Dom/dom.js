let todos = ["react","express","MOngoDB"]
function addTodo(event) {
    event.preventDefault()
    console.log("add-new-todo");
    let input = document.getElementById("input-title").value;
    console.log("add",input);
    // todos.push(input)
    let outputList = ``
     todos.forEach((input)=>{
        outputList += `<li>${input}</li>`
     });
    document.getElementById("todos-list").innerHTML = outputList;

}