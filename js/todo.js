let addingItem = true;
let counter = 2;

function AddItem()
{
    if(addingItem == true)
    {
        return;
    }


    addingItem = true;
    let TODO_CONTAINER = document.getElementById("ToDoContent");

    let toDoItemHTML = '<div class="ToDoItem" id="ToDoItem">' +
                    '<div class="ToDoItemID" id="ToDoItemID">' + counter + '.</div>' +
                    '<div class="ToDoItemText" id="ToDoItemText">' +
                    '<input class="ToDoItemInputText" type="text" name="ToDoItemInputText" id="ToDoItemInputText" placeHolder="Write Activity"></input>' +
                    '</div>' +
                    '<div class="ToDoItemDone" onclick="FinishItem()" id="ToDoItemDone"><button>&checkmark;</button></div>' +
                '</div>';

    TODO_CONTAINER.insertAdjacentHTML("afterbegin",toDoItemHTML)
    counter++;
}

function FinishItem()
{
    if(!addingItem)
    {
        document.getElementById("ToDoItemDone").parentElement.remove();
        counter--;
    }

    addingItem = false;

    let inputText = document.getElementById("ToDoItemInputText");
    let itemText = document.getElementById("ToDoItemText");
    let itemButton = document.getElementById("ToDoItemDone");

    itemText.innerText = inputText.value;
    itemButton.innerHTML = "<button>&cross;</button>";

    inputText.removeChild();
}
