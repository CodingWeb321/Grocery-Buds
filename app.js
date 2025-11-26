import { getItems, saveItems } from "./storage.js";
import { renderItems } from "./ui.js";
import { generateId } from "./utils.js";

const textInput = document.getElementById("textInput");
const addBtn = document.getElementById("addBtn");
const listDiv = document.querySelector(".listDiv");

let groceryArray = getItems();

// Update function (rerenders UI)
function update(newArray) {
  groceryArray = newArray;
  renderItems(listDiv, groceryArray, update);
}

// Initial render
update(groceryArray);

addBtn.addEventListener("click", () => {
  const value = textInput.value.trim();
  if (!value) return;

  const newItem = {
    id: generateId(),
    taskName: value,
  };

  const updatedList = [...groceryArray, newItem];

  saveItems(updatedList);
  update(updatedList);

  textInput.value = "";
});
