document.addEventListener('DOMContentLoaded', function () {

    let pencil = qs('#pencil');
    let todoText = qs('.todoText');
    let tipBtn = qs('.tipBtn');
    let overlay = qs('#overlay');
    let closebtn = qs('.closebtn');
    let todos = qs('.todos');


    pencil.addEventListener('click', function () {
        todoText.classList.toggle('display')
    })

    tipBtn.addEventListener('click', function () {
        overlay.style.height = '100%'
    })

    closebtn.addEventListener('click', function (event) {
        event.preventDefault()
        overlay.style.height = '0'
    })

    todos.addEventListener('click', function (event) {
        let currentEl = event.target;
        if (currentEl.classList.contains('removeTodo')) {
            currentEl.closest('.todo').remove();
        }
    })

    todoText.addEventListener('keyup', function (event) {
        if (event.which === 13) {
            createTodo(event.target)
        }
    })


    function qs(selector) {
        return document.querySelector(selector)
    }

    function createTodo(target) {
        if (target.value === '') return

        let li = document.createElement('li');
        li.classList.add('todo');

        let span = document.createElement('span');
        span.classList.add('removeTodo');

        let icon = document.createElement('i');
        icon.classList.add('fas', 'fa-trash-alt');

        span.append(icon);
        li.append(span);
        li.append(target.value)
        todos.append(li)

        target.value = '';
    }
})