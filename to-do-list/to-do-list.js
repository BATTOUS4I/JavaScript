const to_do_list = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList() {
  let to_do_listHTML = "";

  for (let i = 0; i < to_do_list.length; i++) {
    const todo = to_do_list[i];
    const html = `<p>${todo}</p> `;
    to_do_listHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = to_do_listHTML;
}


function add_to_do() {
 const inputElement = document.querySelector('.js-add');
 const name = inputElement.value; 
 to_do_list.push(name);
 console.log(to_do_list);

 inputElement.value = '';

 renderTodoList();
}