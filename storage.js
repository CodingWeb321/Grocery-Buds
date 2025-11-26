export function getItems() {
  return JSON.parse(localStorage.getItem("groceryItems")) || [];
}

export function saveItems(items) {
  localStorage.setItem("groceryItems", JSON.stringify(items));
}
