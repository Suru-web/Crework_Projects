let addButton = document.getElementById("addButton");
let toDoContainer = document.getElementById("toContainer");
let inputField = document.getElementById("inputField");
let id = 0;
const taks = [];
addButton.addEventListener("click", (event) => {
    //stops the form to submit
    let text = document.createElement("p");
    text.id = id;
    text.innerHTML = `<input type="checkbox" id="check">
        <span>
        ${inputField.value}
        </span>
        <button class="del" onclick="Delete(this,${id})">delete</button>`;
    const check = document.getElementById("check");
    toDoContainer.appendChild(text);
    id++;
    inputField.value = "";
    text.addEventListener("click", (event) => {
        text.style.textDecoration = "line-through";
    });
    // text.addEventListener('dblclick',(event) =>{
    //     toDoContainer.removeChild(text);
    // })
});
function Delete(currentEl, id) {
    const toRemove = document.getElementById(id);
    toRemove.remove();
    console.log(currentEl);
}














