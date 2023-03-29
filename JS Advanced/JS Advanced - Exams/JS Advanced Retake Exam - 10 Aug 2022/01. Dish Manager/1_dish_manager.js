// window.addEventListener("load", solve);

function solve() {
    const inputFields = {
        firstName: document.querySelector('#first-name'),
        lastName: document.querySelector('#last-name'),
        age: document.querySelector('#age'),
        gender: document.querySelector('#genderSelect'),
        description: document.querySelector('#task')
    }
    
    const formBtn = document.querySelector('#form-btn')
    
    const dish = {
        inProgress: document.querySelector('#in-progress'),
        finishedCooking: document.querySelector('#finished'),
        progressCount: document.querySelector('#progress-count'),
        clearBtn: document.querySelector('#clear-btn')
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
        const currentElement = event.target
        const currentParent = currentElement.parentElement

        const [firstName, lastName] = currentParent.querySelector('h4').textContent.split(' ')
        const [genderAge, description] = Array.from(currentParent.querySelectorAll('p'))
        
        inputFields.firstName.value = firstName
        inputFields.lastName.value = lastName
        const [gender, age] =genderAge.textContent.split(', ')
        inputFields.gender.value = gender
        inputFields.age.value = age
        inputFields.description.value = description.textContent.split(': ')[1]
        dish.progressCount.textContent = Number(dish.progressCount.textContent) - 1
        currentParent.remove()
    }
    
    const completeBtnFunctionality = (event) => {
        const currentElement = event.currentTarget
        const currentParent = currentElement.parentElement
        
        const [editBtn, completeBtn] = Array.from(currentParent.querySelectorAll('button'))

        currentParent.removeChild(editBtn)
        currentParent.removeChild(completeBtn)
        
        dish.finishedCooking.appendChild(currentParent)
        dish.progressCount.textContent = Number(dish.progressCount.textContent) - 1
    }
    
    const createDishElement = (data) => {
        const li = createElement({tag: 'li', className: ['each-line']})
        const article = createElement({tag: 'article'})
        article.appendChild(createElement({tag: 'h4', textContent: `${data.firstName.value} ${data.lastName.value}`}))
        article.appendChild(createElement({tag: 'p', textContent: `${data.gender.value}, ${data.age.value}`}))
        article.appendChild(createElement({tag: 'p', textContent: `Dish description: ${data.description.value}`}))
        
        li.appendChild(article)
        li.appendChild(createElement({tag: 'button', textContent: 'Edit', className: ['edit-btn'], buttonEven: {click: editBtnFunctionality}}))
        li.appendChild(createElement({tag: 'button', textContent: 'Mark as complete', className: ['complete-btn'], buttonEven: {click: completeBtnFunctionality}}))
        
        return li
    }
    
    const formBtnFunctionality = (event) => {
        event.preventDefault()
        const data = Object.values(inputFields)
        
        if (!checkCorrectInputs(data)) return
        
        dish.inProgress.appendChild(createDishElement(inputFields))
        dish.progressCount.textContent = Number(dish.progressCount.textContent) + 1
        clearInputFields(data)
    }
    
    const clearBtnFunctionality = () => {
        dish.finishedCooking.innerHTML = ''
    }
    
    formBtn.addEventListener('click', formBtnFunctionality)
    dish.clearBtn.addEventListener('click', clearBtnFunctionality)
    
}
