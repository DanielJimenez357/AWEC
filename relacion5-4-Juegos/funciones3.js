const input = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const list = document.getElementById("list");

const addItem = () => {
    const value = input.value
    if (value === "") return; 

    const listItem = document.createElement("li"); 
    listItem.textContent = value; 

    const removeButton = document.createElement("button");
    removeButton.textContent = "Eliminar";
    removeButton.className = "remove";

    removeButton.addEventListener("click", () => {
        listItem.remove();
    });

    listItem.appendChild(removeButton);

    list.appendChild(listItem);

    input.value = "";
};

addButton.addEventListener("click", addItem);

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addItem();
    }
});

const clearList = () => {
    list.innerHTML = ""
}

