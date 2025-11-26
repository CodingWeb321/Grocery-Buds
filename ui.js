import { saveItems } from "./storage.js";

export function renderItems(listDiv, groceryArray, updateCallback) {
  listDiv.innerHTML = "";

  groceryArray.forEach((item) => {
    const div = document.createElement("div");
    div.className = "grocery-item";

    const span = document.createElement("span");
    span.textContent = item.taskName;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";

    delBtn.addEventListener("click", () => {
      const updatedList = groceryArray.filter((g) => g.id !== item.id);
      saveItems(updatedList);
      updateCallback(updatedList);
    });

    div.appendChild(span);
    div.appendChild(delBtn);
    listDiv.appendChild(div);
  });
}
