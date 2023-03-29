window.addEventListener('load', solve);

function solve() {
    const inputFields = {
        firstName: document.querySelector('#first-name'),
        lastName: document.querySelector('#last-name'),
        dateIn: document.querySelector('#date-in'),
        dateOut: document.querySelector('#date-out'),
        peopleCount: document.querySelector('#people-count'),
    }

    const nextBtn = document.querySelector('#next-btn')

    const hotel = {
        reservation: document.querySelector('.info-list'),
        confirm: document.querySelector('.confirm-list'),
        reservationStatus: document.querySelector('#verification')
    }

    const savedTicketInformation =
        {
            firstName: null,
            lastName: null,
            dateIn: null,
            dateOut: null,
            peopleCount: null
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

    const editBtnFunctionality = (even) => {
        const target = even.currentTarget
        target.parentNode.remove()
        if (target.textContent === 'Edit') {
            target.parentNode.remove()
            loadTickedDataToEdit(savedTicketInformation, inputFields)
            nextBtn.disabled = false
        } else {
            nextBtn.disabled = false
            hotel.reservationStatus.textContent = 'Confirmed.'
            hotel.reservationStatus.classList.add('reservation-confirmed')
        }
    }

    const continueBtnFunctionality = (even) => {
        const target = even.currentTarget

        if (target.textContent === 'Continue') {
            const parent = target.parentNode
            const [confirmBtn, cancelBtn] = Array.from(parent.querySelectorAll('button'))
            confirmBtn.textContent = 'Confirm'
            cancelBtn.textContent = 'Cancel'
            confirmBtn.className = 'confirm-btn'
            cancelBtn.className = 'cancel-btn'
            
            
            hotel.reservation.removeChild(parent)
            hotel.confirm.appendChild(parent)
        } else {
            target.parentNode.remove()
            nextBtn.disabled = false
            hotel.reservationStatus.textContent = 'Cancelled.'
            hotel.reservationStatus.classList.add('reservation-cancelled')
        }

    }

    const createHotelElement = () => {
        const li = createElement({tag: 'li', className: ['reservation-content']})
        const article = createElement({tag: 'article'})
        article.appendChild(createElement({
            tag: 'h3',
            textContent: `Name: ${inputFields.firstName.value} ${inputFields.lastName.value}`
        }))
        article.appendChild(createElement({tag: 'p', textContent: `From date: ${inputFields.dateIn.value}`}))
        article.appendChild(createElement({tag: 'p', textContent: `To date: ${inputFields.dateOut.value}`}))
        article.appendChild(createElement({tag: 'p', textContent: `For ${inputFields.peopleCount.value} people`}))
        li.appendChild(article)
        li.appendChild(createElement({
            tag: 'button',
            textContent: 'Edit',
            className: ['edit-btn'],
            buttonEven: {click: editBtnFunctionality}
        }))
        li.appendChild(createElement({
            tag: 'button',
            textContent: 'Continue',
            className: ['continue-btn'],
            buttonEven: {click: continueBtnFunctionality}
        }))

        return li
    }

    const nextBtnFunctionality = (event) => {
        event.preventDefault()
        const data = Object.values(inputFields)

        if (!checkCorrectInputs(data) || new Date(inputFields.dateIn.value) >= new Date(inputFields.dateOut.value)) return

        hotel.reservation.appendChild(createHotelElement())
        saveTicketDataToInformation(inputFields, savedTicketInformation)
        clearInputFields(data)
        nextBtn.disabled = true
    }

    nextBtn.addEventListener('click', nextBtnFunctionality)
}
