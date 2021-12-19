let input = prompt("What would you like to do ?")

const todos = ["real madrid win", "hazard scores"];
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        for (let i = 0; i < todos.length; i++)
            console.log(`${i} : ${todos[i]}`);
    } else if (input === "new") {
        newTodo = prompt("What is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (input === "delete") {
        const index = parseInt(prompt("enter an index to delete"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1)
            console.log(`${deleted[0]} deleted from list`)
        } else {
            console.log("enter a valid index")
        }

    }
    input = prompt("What would you like to do ?");
}
console.log("you quit the app");