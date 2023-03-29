function solve() {
    const mailInput = {
        recipient: document.querySelector('#recipientName'),
        title: document.querySelector('#title'),
        message: document.querySelector('#message')
    }

    const mailBtns = {
        add: document.querySelector('#add'),
        reset: document.querySelector('#reset'),
    }

    const mail = {
        list: document.querySelector('#list'),
        sent: document.querySelector('.sent-list'),
        delete: document.querySelector('.delete-list')
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

    const checkCorrectInputs = (dataFromInput) => dataFromInput.every(item => item.value.trim().length !== 0)

    const clearInputFields = (dataFromInput => dataFromInput.forEach(x => x.value = ''))

    const deleteSaveBtnFunctionality = (event) => {
        event.preventDefault()
        const elementHtml = event.currentTarget.parentElement.parentElement
        elementHtml.querySelector('button').parentElement.remove()

        mail.delete.appendChild(elementHtml)
        event.currentTarget.parentElement.parentElement.remove()

    }

    const sendBtnFunctionality = (event) => {
        event.preventDefault()
        const elementHtml = event.currentTarget.parentElement.parentElement
        const [recipient, title] = Array.from(elementHtml.querySelectorAll('h4'))

        const li = createElement({tag: 'li'})
        li.appendChild(createElement({tag: 'span', textContent: `To: ${recipient.textContent.split(': ')[1]}`}))
        li.appendChild(createElement({tag: 'span', textContent: `Title: ${title.textContent.split(': ')[1]}`}))

        const div = createElement({tag: 'div', className: ['btn']})
        div.appendChild(createElement({
            tag: 'button',
            textContent: 'Delete',
            className: ['delete'],
            attributes: {type: 'submit'},
            buttonEven: {click: deleteSaveBtnFunctionality}
        }))

        li.appendChild(div)
        mail.sent.appendChild(li)
        elementHtml.remove()
    }

    const deleteBtnFunctionality = (event) => {
        event.preventDefault()
        const elementHtml = event.currentTarget.parentElement.parentElement
        const [recipient, title] = Array.from(elementHtml.querySelectorAll('h4'))

        const li = createElement({tag: 'li'})
        li.appendChild(createElement({tag: 'span', textContent: `To: ${recipient.textContent.split(': ')[1]}`}))
        li.appendChild(createElement({tag: 'span', textContent: `Title: ${title.textContent.split(': ')[1]}`}))

        event.currentTarget.parentElement.parentElement.remove()
        mail.delete.appendChild(li)
    }

    const createDeleteMail = (to, title) => {
        const li = createElement({tag: 'li'})
        li.appendChild(createElement({tag: 'span', textContent: to}))
        li.appendChild(createElement({tag: 'span', textContent: title}))

        return li
    }

    const createMailElement = (data) => {
        const li = createElement({tag: 'li'})
        li.appendChild(createElement({tag: 'h4', textContent: `Title: ${data.title.value}`}))
        li.appendChild(createElement({tag: 'h4', textContent: `Recipient Name: ${data.recipient.value}`}))
        li.appendChild(createElement({tag: 'span', textContent: data.message.value}))

        const div = createElement({tag: 'div', attributes: {id: 'list-action'}})
        div.appendChild(createElement({
            tag: 'button',
            textContent: 'Send',
            attributes: {id: 'send', type: 'submit'},
            buttonEven: {click: sendBtnFunctionality}
        }))
        div.appendChild(createElement({
            tag: 'button',
            textContent: 'Delete',
            attributes: {id: 'delete', type: 'submit'},
            buttonEven: {click: deleteBtnFunctionality}
        }))

        li.appendChild(div)
        return li
    }

    const addBtnFunctionality = (event) => {
        event.preventDefault()
        const data = Object.values(mailInput)

        if (!checkCorrectInputs(data)) return

        mail.list.appendChild(createMailElement(mailInput))

        clearInputFields(data)
    }

    const resetBtnFunctionality = (event) => {
        event.preventDefault()
        clearInputFields(Object.values(mailInput))
    }

    mailBtns.add.addEventListener('click', addBtnFunctionality)
    mailBtns.reset.addEventListener('click', resetBtnFunctionality)
}

solve()