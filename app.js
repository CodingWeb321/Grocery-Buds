const textInput = document.getElementById("textInput");
const addBtn = document.getElementById("addBtn");
const listDiv = document.querySelector(".listDiv");

let groceryArray = JSON.parse(localStorage.getItem("groceryItems")) || [];

//Render Items on the page!
function renderItems() {
  listDiv.innerHTML = ""; //clear old items!

  groceryArray.forEach((item) => {
    //create element
    const div = document.createElement("div");
    div.className = "grocery-item";

    const span = document.createElement("span");
    span.textContent = item.taskName;

    //create delete  button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";

    //delete Functionality
    delBtn.addEventListener("click", () => {
      groceryArray = groceryArray.filter((g) => g.id !== item.id);
      localStorage.setItem("groceryItems", JSON.stringify(groceryArray));
      renderItems();
    });

    div.appendChild(span);
    div.appendChild(delBtn);
    listDiv.appendChild(div);
  });
}
renderItems();

addBtn.addEventListener("click", function () {
  const value = textInput.value.trim();
  if (!value) return;

  const newItem = {
    id: new Date().getTime().toString(),
    taskName: value,
  };

  groceryArray.push(newItem);

  //Save to  local storage!
  localStorage.setItem("groceryItems", JSON.stringify(groceryArray));

  //Rerender
  renderItems();

  //clear input
  textInput.value = "";
});
