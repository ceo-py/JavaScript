function solution() {

    const giftName = document.querySelector('input[type="text"]')
    const giftAdd = document.querySelector('button')
    const [giftList, giftSend, giftDiscard] = Array.from(document.querySelectorAll('.card ul'))


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

    const clearInputFields = (dataFromInput => dataFromInput.forEach(x => x.value = ''))
    
    const removeBtns = (data) => {
        Array.from(data.querySelectorAll('button')).forEach(x => x.remove())
    }
    
    const sendBtnFunctionality = (event) => {
        const elementContainer = event.currentTarget.parentElement
        removeBtns(elementContainer)
        giftSend.appendChild(elementContainer)
    }
    
    const discardBtnFunctionality = (event) => {
        const elementContainer = event.currentTarget.parentElement
        removeBtns(elementContainer)
        giftDiscard.appendChild(elementContainer)
    }

    const createGiftElement = (gift) => {
        const li = createElement({tag: 'li', className: ['gift'], textContent: gift})
        li.appendChild(createElement({tag: 'button', textContent: 'Send', attributes: {id: 'sendButton'}, buttonEven: {click: sendBtnFunctionality}}))
        li.appendChild(createElement({tag: 'button', textContent: 'Discard', attributes: {id: 'discardButton'}, buttonEven: {click: discardBtnFunctionality}}))
        return li
    }
    
    const giftAddBtnFunctionality = () => {
        giftList.appendChild(createGiftElement(giftName.value))
        const gifts = Array.from(giftList.querySelectorAll('.gift')).map(x => x.textContent.replace('SendDiscard', '')).sort((a, b) => a.localeCompare(b))
        giftList.innerHTML = ''
        gifts.forEach(x => giftList.appendChild(createGiftElement(x)))
        clearInputFields([giftName])

    }

    giftAdd.addEventListener('click', giftAddBtnFunctionality)
}


