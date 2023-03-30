function solve() {
    const inputFields = {
        task: document.querySelector('#task'),
        description: document.querySelector('#description'),
        dueDate: document.querySelector('#date')
    }

    const task = {
        addBtn: document.querySelector('#add'),
        open: document.querySelector('.orange').parentElement.parentElement.querySelectorAll('div')[1],
        inProgress: document.querySelector('#in-progress'),
        complete: document.querySelector('.green').parentElement.parentElement.querySelectorAll('div')[1]
    }

    const createElement = ({tag, textContent = '', value = '', className = [], attributes = {}, buttonEven = {}}) => {
        const e = document.createElement(tag)
        if (textContent) e.textContent = textContent
        if (value) e.value = value
        className.forEach(x => e.classList.add(x))
        for (const [key, value] of Object.entries(attributes)) {
            e.setAttribute(key, value)
        }
        for (const [key, value] of Object.entries(buttonEven)) {
            e.addEventListener(key, value)
        }
        return e
    }

    const startBtnFunctionality = (event) => {
        const currentElement = event.currentTarget.parentElement.parentElement
        const [deleteBtn, finishBtn] = Array.from(currentElement.querySelectorAll('button'))

        if (event.currentTarget.textContent === 'Start') {
            deleteBtn.className = ''
            deleteBtn.classList.add('red')
            deleteBtn.textContent = 'Delete'

            finishBtn.className = ''
            finishBtn.classList.add('orange')
            finishBtn.textContent = 'Finish'

            task.inProgress.appendChild(currentElement)
        } else {
            currentElement.remove()
        }

    }

    const deleteBtnFunctionality = (event) => {
        const currentElement = event.currentTarget.parentElement.parentElement
        event.currentTarget.parentElement.remove()

        if (event.currentTarget.textContent === 'Delete') {
            currentElement.remove()
        } else {
            task.complete.appendChild(currentElement)
        }

    }

    const createTaskElement = (data) => {
        const article = createElement({tag: 'article'})
        article.appendChild(createElement({tag: 'h3', textContent: data.task.value}))
        article.appendChild(createElement({tag: 'p', textContent: `Description: ${data.description.value}`}))
        article.appendChild(createElement({tag: 'p', textContent: `Due Date: ${data.dueDate.value}`}))
        const div = createElement({tag: 'div', className: ['flex']})
        div.appendChild(createElement({
            tag: 'button',
            textContent: 'Start',
            className: ['green'],
            buttonEven: {click: startBtnFunctionality}
        }))
        div.appendChild(createElement({
            tag: 'button',
            textContent: 'Delete',
            className: ['red'],
            buttonEven: {click: deleteBtnFunctionality}
        }))
        article.appendChild(div)

        return article
    }

    const addBtnFunctionality = (event) => {
        event.preventDefault()

        task.open.appendChild(createTaskElement(inputFields))
    }

    task.addBtn.addEventListener('click', addBtnFunctionality)
}



