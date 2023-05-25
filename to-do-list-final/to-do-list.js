const to_do_list = [
  {
    name: "make dinner",
    dueDate: "2022-12-22",
  }, {
    name: "wash dishes",
    dueDate: '2022-12-22'
  }];

renderTodoList();

function renderTodoList() {
  let to_do_listHTML = "";

  for (let i = 0; i < to_do_list.length; i++) {
    const todoObject = to_do_list[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
    
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      to_do_list.splice(${i}, 1);
      renderTodoList();
    " class="delete-button">Delete</button> 
    
  `;
    to_do_listHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = to_do_listHTML;
}


function add_to_do() {
 const inputElement = document.querySelector('.js-add');
 const dateInputElement = document.querySelector('.js-date');
 const name = inputElement.value;
 const dueDate = dateInputElement.value;
 to_do_list.push({
  name: name,
  dueDate: dueDate
});


 inputElement.value = '';

 renderTodoList();
}