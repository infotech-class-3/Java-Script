const select = document.querySelector("#users");
const tableElement = document.querySelector("#tbody");
const search = document.querySelector("#search");

let userTodos = [];
let str = "";

const getUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

window.addEventListener("load", async () => {
  const { data } = await getUsers();
  data.forEach((user) => {
    const option = document.createElement("option");
    option.value = user.id;
    option.textContent = user.name;
    select.appendChild(option);
  });
});

const getTodos = async (userId) => {
  const todos = await axios.get(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
  );
  userTodos = todos.data;
  return todos;
};

const makeList = (todos) => {
  tableElement.innerHTML = "";

  todos.forEach((todo) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const td_2 = document.createElement("td");
    const button = document.createElement("button");

    td.innerHTML = todo.completed ? `<del>${todo.title}</del>` : todo.title;
    button.innerHTML = todo.completed ? "done" : "un-done";
    button.className = todo.completed ? "btn btn-success" : "btn btn-warning";
    button.id = todo.id;
    button.addEventListener("click", (e) => {
      changeStatus(e.target.id);
    });
    tr.appendChild(td);
    tr.appendChild(td_2);
    td_2.appendChild(button);

    tableElement.appendChild(tr);
  });
};

select.addEventListener("change", async (e) => {
  const { data } = await getTodos(e.target.value);

  makeList(data);
});

const changeStatus = (id) => {
  const index = userTodos.findIndex((item) => item.id == id);
  if (userTodos[index].completed == true) {
    userTodos[index].completed = false;
  } else {
    userTodos[index].completed = true;
  }

  if (str == "") {
    makeList(userTodos);
  } else {
    searchTodos(str);
  }
};

const searchTodos = (str) => {
  const temp = userTodos.filter((item) => item.title.includes(str));

  makeList(temp);
};

search.addEventListener("input", (e) => {
  str = e.target.value;

  searchTodos(str);
});
