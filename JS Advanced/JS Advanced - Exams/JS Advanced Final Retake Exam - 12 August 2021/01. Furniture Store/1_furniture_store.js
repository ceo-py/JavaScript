// window.addEventListener('load', solve);

function solve() {
    const itemInput = {
        model: document.querySelector('#model'),
        year: document.querySelector('#year'),
        description: document.querySelector('#description'),
        price: document.querySelector('#price')
    }

    const addProductBtn = document.querySelector('#add')

    const furniture = {
        list: document.querySelector('#furniture-list'), totalPrice: document.querySelector('.total-price')

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

    const divHideIndex = (data) => {
        const allDataInfo = Array.from(document.querySelectorAll('.info'))
        for (const index in allDataInfo) {
            if (data === allDataInfo[index]) {
                return index
            }
        }
    }

    const moreBtnFunctionality = (event) => {
        const currentElement = event.currentTarget
        const index = divHideIndex(currentElement.parentElement.parentElement)
        const divHide = Array.from(document.querySelectorAll('.hide'))[index]

        if (currentElement.textContent === 'More Info') {
            currentElement.textContent = 'Less Info'
            divHide.style.display = 'contents'

        } else {
            currentElement.textContent = 'More Info'
            divHide.style.display = 'none'
        }
    }

    const buyBtnFunctionality = (event) => {
        const currentElement = event.currentTarget

        const index = divHideIndex(currentElement.parentElement.parentElement)
        const divHide = Array.from(document.querySelectorAll('.hide'))[index]

        const [_, price, __] = Array.from(currentElement.parentElement.parentElement.querySelectorAll('td'))
        furniture.totalPrice.textContent = (Number(furniture.totalPrice.textContent) + Number(price.textContent)).toFixed(2)

        currentElement.parentElement.parentElement.remove()
        divHide.remove()
    }

    const createFurnitureElement = (data) => {
        const tr = createElement({tag: 'tr', className: ['info']})
        tr.appendChild(createElement({tag: 'td', textContent: data.model.value}))
        tr.appendChild(createElement({tag: 'td', textContent: Number(data.price.value).toFixed(2)}))

        const td = createElement({tag: 'td'})
        td.appendChild(createElement({
            tag: 'button', textContent: 'More Info', className: ['moreBtn'], buttonEven: {click: moreBtnFunctionality},
        }))
        td.appendChild(createElement({
            tag: 'button', textContent: 'Buy it', className: ['buyBtn'], buttonEven: {click: buyBtnFunctionality},
        }))
        tr.appendChild(td)

        const trHide = createElement({tag: 'tr', className: ['hide']})
        trHide.appendChild(createElement({tag: 'td', textContent: `Year: ${data.year.value}`}))
        trHide.appendChild(createElement({
            tag: 'td', textContent: `Description: ${data.description.value}`, attributes: {colspan: 3}
        }))

        furniture.list.appendChild(tr)
        furniture.list.appendChild(trHide)
    }

    const addProductBtnFunctionality = (event) => {
        event.preventDefault()

        const data = Object.values(itemInput)

        if (!checkCorrectInputs(data)) return

        createFurnitureElement(itemInput)
        clearInputFields(data)
    }

    addProductBtn.addEventListener('click', addProductBtnFunctionality)

}
