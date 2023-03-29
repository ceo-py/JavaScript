window.addEventListener('load', solve);

function solve() {
    const inputFields = {firstName: document.querySelector('#first-name'), 
        lastName: document.querySelector('#last-name'), 
        peopleCount: document.querySelector('#people-count'), 
        fromDate: document.querySelector('#from-date'), 
        daysCount: document.querySelector('#days-count')
    }

    const buttons = {
        nextBtn: document.querySelector('#next-btn')
    }
    
    const ticketInformation = {
        ticketPreview: document.querySelector('.ticket-info-list'),
        confirmTicket: document.querySelector('.confirm-ticket')
    }

    const savedTicketInformation =
        {firstName: null,
        lastName: null,
        peopleCount: null,
        fromDate: null,
        daysCount: null
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

    const saveTicketDataToInformation = (data, saveData) => {
        for (const key in data) {
            saveData[key] = data[key].value
        }
    }

    const loadTickedDataToEdit = (data, toLoadInto) => {
        for (const key in data) {
            toLoadInto[key].value = data[key]
        }
    }

    const editBtnFunctionality = (event) => {
        loadTickedDataToEdit(savedTicketInformation, inputFields)
        event.currentTarget.parentNode.remove()
        buttons.nextBtn.disabled = false
    }

    const confirmBtnFunctionality = () => {
        document.querySelector('#main').remove()
        const main = document.querySelector('#body')

        main.appendChild(createElement({tag: 'h1', textContent: 'Thank you, have a nice days!', attributes: {id : 'thank-you'}}))
        main.appendChild(createElement({tag: 'button', textContent: 'Back', attributes: {id : 'back-btn'}}))
    }

    const cancelBtnFunctionality = (event) => {
        event.currentTarget.parentNode.remove()
        buttons.nextBtn.disabled = false
    }

    const continueBtnFunctionality = (event) => {
        const currentElement = event.currentTarget.parentNode
        const [editBtn, deleteBtn] = Array.from(currentElement.querySelectorAll('button'))
        currentElement.removeChild(editBtn)
        currentElement.removeChild(deleteBtn)

        ticketInformation.ticketPreview.removeChild(currentElement)

        currentElement.appendChild(createElement({tag: 'button', textContent: 'Confirm', className: ['confirm-btn'],buttonEven: {click: confirmBtnFunctionality}}))
        currentElement.appendChild(createElement({tag: 'button', textContent: 'Cancel', className: ['cancel-btn'],buttonEven: {click: cancelBtnFunctionality}}))

        ticketInformation.confirmTicket.appendChild(currentElement)
    }

    const createTicketHtmlElement = () => {
        const li = createElement({tag: 'li', className: ['ticket']})
        const article = createElement({tag: 'article'})

        article.appendChild(createElement({tag : 'h3', textContent: `Name: ${inputFields.firstName.value} ${inputFields.lastName.value}`}))
        article.appendChild(createElement({tag : 'p', textContent: `From date: ${inputFields.fromDate.value}`}))
        article.appendChild(createElement({tag : 'p', textContent: `For ${inputFields.daysCount.value} days`}))
        article.appendChild(createElement({tag : 'p', textContent: `For ${inputFields.peopleCount.value} people`}))
        li.appendChild(article)
        li.appendChild(createElement({tag: 'button', textContent: 'Edit', className: ['edit-btn'],buttonEven: {click: editBtnFunctionality}}))
        li.appendChild(createElement({tag: 'button', textContent: 'Continue', className: ['continue-btn'],buttonEven: {click: continueBtnFunctionality}}))
        return li
    }

    const nextBtnFunctionality = (event) => {
        event.preventDefault()

        if (!checkCorrectInputs(Object.values(inputFields))) return

        ticketInformation.ticketPreview.appendChild(createTicketHtmlElement())
        saveTicketDataToInformation(inputFields, savedTicketInformation)
        clearInputFields(Object.values(inputFields))
        buttons.nextBtn.disabled = true

    }

    buttons.nextBtn.addEventListener('click', nextBtnFunctionality)
}

