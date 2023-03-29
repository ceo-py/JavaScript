// window.addEventListener("load", solve);

function solve() {
    const carDetails = {
        make: document.querySelector('#make'),
        model: document.querySelector('#model'),
        yearProduction: document.querySelector('#year'),
        fuelType: document.querySelector('#fuel'),
        originalPrice: document.querySelector('#original-cost'),
        sellingPrice: document.querySelector('#selling-price')
    }

    const publishBtn = document.querySelector('#publish')

    const car = {
        tableBody: document.querySelector('#table-body'),
        soldCars: document.querySelector('#cars-list'),
        profit: document.querySelector('#profit')
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

    const editBtnFunctionality = (event) => {
        const parentElement = event.currentTarget.parentElement.parentNode
        const [make, model, yearProduction, fuelType, originalPrice, sellingPrice, _] = Array.from(parentElement.querySelectorAll('td'))

        carDetails.make.value = make.textContent
        carDetails.model.value = model.textContent
        carDetails.yearProduction.value = yearProduction.textContent
        carDetails.fuelType.value = fuelType.textContent
        carDetails.originalPrice.value = originalPrice.textContent
        carDetails.sellingPrice.value = sellingPrice.textContent
        parentElement.remove()
    }

    const sellBtnFunctionality = (event) => {
        const currentParent = event.currentTarget.parentElement.parentNode
        const [make, model, yearProduction, fuelType, originalPrice, sellingPrice, _] = Array.from(currentParent.querySelectorAll('td'))
        const li = !car.soldCars.querySelector('.each-list') ? createElement({tag: 'li', className: ['each-list']}) : car.soldCars.querySelector('.each-list')

        const profit = Number(sellingPrice.textContent) - Number(originalPrice.textContent)

        li.appendChild(createElement({tag: 'span', textContent: `${make.textContent} ${model.textContent}`}))
        li.appendChild(createElement({tag: 'span', textContent: yearProduction.textContent}))
        li.appendChild(createElement({tag: 'span', textContent: profit}))

        car.soldCars.appendChild(li)
        car.profit.textContent = (Number(car.profit.textContent) + profit).toFixed(2)
        currentParent.remove()

    }

    const createCarElement = (data) => {
        const tr = createElement({tag: 'tr', className: ['row']})
        tr.appendChild(createElement({tag: 'td', textContent: data.make.value}))
        tr.appendChild(createElement({tag: 'td', textContent: data.model.value}))
        tr.appendChild(createElement({tag: 'td', textContent: data.yearProduction.value}))
        tr.appendChild(createElement({tag: 'td', textContent: data.fuelType.value}))
        tr.appendChild(createElement({tag: 'td', textContent: data.originalPrice.value}))
        tr.appendChild(createElement({tag: 'td', textContent: data.sellingPrice.value}))
        const td = createElement({tag: 'td'})

        td.appendChild(createElement({tag: 'button', textContent: 'Edit', className: ['action-btn', 'edit'], buttonEven: {click: editBtnFunctionality}}))
        td.appendChild(createElement({tag: 'button', textContent: 'Sell', className: ['action-btn', 'sell'], buttonEven: {click: sellBtnFunctionality}}))
        tr.appendChild(td)
        return tr
    }

    const publishBtnFunctionality = (event) => {
        event.preventDefault()
        const data = Object.values(carDetails)

        if (!checkCorrectInputs(data) || Number(carDetails.originalPrice.value) > Number(carDetails.sellingPrice.value)) return

        car.tableBody.appendChild(createCarElement(carDetails))
        clearInputFields(data)
    }

    publishBtn.addEventListener('click', publishBtnFunctionality)
}

// solve()
