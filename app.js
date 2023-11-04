const listeItem = document.querySelector("ul"),
  Items = document.querySelectorAll("ul li");

Items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    setTimeout(() => item.classList.add("dragging"), 0);
  });

  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

listeItem.addEventListener("dragover", (e) => {
  e.preventDefault();
  const draggingItem = listeItem.querySelector(".dragging");
  const itemSibling = [...listeItem.querySelectorAll("li:not(.dragging)")];
  let nextitemSibling = itemSibling.find((item) => {
    return e.clientY <= item.offsetTop + item.offsetHeight / 2;
  });

  listeItem.insertBefore(draggingItem, nextitemSibling);
});

listeItem.addEventListener("dragleave", (e) => e.preventDefault());
