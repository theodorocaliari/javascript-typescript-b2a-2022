function init() {
  const taskName = document.querySelector("[name='tarefa']");
  const tasks = createTasksList();

  document.addEventListener("click", (e) => {
    e.preventDefault();
    let tasks;
    const el = e.target; //identificando o elemento clicado
    //console.log(el);

    if (el.classList.contains("btnAddTask")) {
      let item = taskName.value;
      tasks = addItemTaskList(item);
      taskName.value = "";
      saveListToLocalStorage(tasks);
      displayListInFront(tasks);
      console.log(tasks);
    }

    if (el.classList.contains("excluir-tarefa")) {
      const itemIndex = el.getAttribute("item-id");
      tasks = removeItemTaskList(itemIndex);
      el.parentElement.remove();
      saveListToLocalStorage(tasks);
      console.log(tasks);
    }
  });

  displayListInFront(tasks);

  function addItemTaskList(item) {
    if (item) {
      tasks.push(item);
    }
    return tasks;
  }

  function removeItemTaskList(index) {
    delete tasks[index];
    return tasks;
  }

  function createTasksList() {
    let tasks;

    if (localStorage.getItem("tasks") !== null) {
      //carregando localstorage
      const loadLocalStorage = localStorage.getItem("tasks");
      //transformando JSON em Array
      tasks = JSON.parse(loadLocalStorage);

      //checa se todos os valores no array sao nulos
      if (tasks.every((item) => item === null)) {
        //se true, limpa
        localStorage.clear();
      }
    } else {
      tasks = [];
    }
    return tasks;
  }

  function saveListToLocalStorage(list) {
    //transformando a lista em JSON
    const listToJSON = JSON.stringify(list);
    //salvando em localstorage
    localStorage.setItem("tasks", listToJSON);
  }

  function displayListInFront(list) {
    const displayDiv = document.querySelector(".feedback");
    let html = "";
    for (let i = 0; i < list.length; i++) {
      if (list[i]) {
        html += `<span class="task__item">`;
        html += list[i];
        html += `<button item-id="${i}" class="mdi mdi-close excluir-tarefa"></button>`;
        html += `</span>`;
      }
    }
    displayDiv.innerHTML = html;
  }
}
init();
