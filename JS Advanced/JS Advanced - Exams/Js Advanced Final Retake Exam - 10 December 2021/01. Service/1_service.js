window.addEventListener('load', solve);

function solve() {
    const repairItem = {
        productType: document.querySelector('#type-product'),
        problemDescription: document.querySelector('#description'),
        clientName: document.querySelector('#client-name'),
        clientPhone: document.querySelector('#client-phone')
    }
    
    const repairService = {
        receivedOrders: document.querySelector('#received-orders'),
        completedOrders: document.querySelector('#completed-orders')
    }
    
    const btns = {
        sendForm: document.querySelector('button[type="submit"]'),
        clear: document.querySelector('.clear-btn')
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
    
    const startBtnFunctionality = (event) => {
        const [startBtn, finishBtn] = Array.from(event.currentTarget.parentElement.querySelectorAll('button'))
        startBtn.disabled = true
        finishBtn.disabled = false
    }
    
    const finishBtnFunctionality = (event) => {
        const currentParent = event.currentTarget.parentElement
        const [startBtn, finishBtn] = Array.from(currentParent.querySelectorAll('button'))
        startBtn.remove()
        finishBtn.remove()
        
        repairService.receivedOrders.removeChild(currentParent)
        repairService.completedOrders.appendChild(currentParent)
        
    }

    function createProductElement(data) {
        const div = createElement({tag: 'div', className: ['container']})
        div.appendChild(createElement({tag: 'h2', textContent: `Product type for repair: ${data.productType.value}`}))
        div.appendChild(createElement({tag: 'h3', textContent: `Client information: ${data.clientName.value}, ${data.clientPhone.value}`}))
        div.appendChild(createElement({tag: 'h4', textContent: `Description of the problem: ${data.problemDescription.value}`}))
        div.appendChild(createElement({tag: 'button', textContent: 'Start repair', className: ['start-btn'], buttonEven: {click: startBtnFunctionality}}))
        div.appendChild(createElement({tag: 'button', textContent: 'Finish repair', className: ['finish-btn'], buttonEven: {click: finishBtnFunctionality}, attributes: {disabled: true}}))
        
        return div 
    }

    const sendFormFunctionality = (event) => {
        event.preventDefault()
        const data = Object.values(repairItem)
        
        if (!checkCorrectInputs((data))) return
        
        repairService.receivedOrders.appendChild(createProductElement(repairItem))
        
        clearInputFields(data)

    }
    
    const clearBtnFunctionality = (event) => {
        Array.from(event.currentTarget.parentElement.querySelectorAll('div')).forEach(x => x.remove())
    }
        
    btns.sendForm.addEventListener('click', sendFormFunctionality)
    btns.clear.addEventListener('click', clearBtnFunctionality)
    
}