window.addEventListener('load', solution);

function solution() {

    const inputFields = {
        fullName: document.querySelector('#fname'),
        email: document.querySelector('#email'),
        phoneNumber: document.querySelector('#phone'),
        address: document.querySelector('#address'),
        postalCode: document.querySelector('#code')
    }

    const agency = {
        submit: document.querySelector('#submitBTN'),
        edit: document.querySelector('#editBTN'),
        continue: document.querySelector('#continueBTN'),
        preView: document.querySelector('#infoPreview'),
        block: document.querySelector('#block')
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

    const createUserElement = (data) => {
        ['Full Name: ', 'Email: ', 'Phone Number: ', 'Address: ', 'Postal Code: '].forEach((x, index) => agency.preView.appendChild(createElement({
            tag: 'li',
            textContent: `${x}${data[index].value}`
        })))
    }

    const submitBtnFunctionality = () => {
        const data = Object.values(inputFields)

        if (!checkCorrectInputs(data)) return

        createUserElement(data)
        agency.submit.disabled = true
        agency.edit.disabled = false
        agency.continue.disabled = false
        clearInputFields(data)
    }

    const editBtnFunctionality = () => {
        const data = Object.values(inputFields)
        Array.from(document.querySelectorAll('li')).forEach((x, index) => {
            data[index].value = x.textContent.split(': ')[1]
            x.remove()
        })
        agency.edit.disabled = true
        agency.continue.disabled = true
        agency.submit.disabled = false
    }

    const continueBtnFunctionality = () => {
        agency.block.innerHTML = ''
        agency.block.appendChild(createElement({tag: 'h3', textContent: 'Thank you for your reservation!'}))
    }
    
    agency.submit.addEventListener('click', submitBtnFunctionality)
    agency.edit.addEventListener('click', editBtnFunctionality)
    agency.continue.addEventListener('click', continueBtnFunctionality)
}
