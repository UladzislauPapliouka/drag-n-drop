const item = document.querySelector(".item")
console.log(item);
const dragstart = (event) => {
  event.target.classList.add("hold")
 setTimeout(()=>{ event.target.classList.add("hide")},0)
}
const dragend = (event) => {
  event.target.classList.remove("hold", "hide")
}
item.addEventListener("dragstart", dragstart)
item.addEventListener("dragend", dragend)

