

document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    addTaskBtn.addEventListener('click', function () {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${taskText}</span>
          <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
        addDeleteListener(li);
      }
    });
  
    function addDeleteListener(li) {
      const deleteBtn = li.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', function () {
        li.remove();
      });
    }
  });

