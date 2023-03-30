function solve() {
    const worker = {
        fName: document.querySelector('#fname'),
        lName: document.querySelector('#lname'),
        email: document.querySelector('#email'),
        DateOfBirth: document.querySelector('#birth'),
        position: document.querySelector('#position'),
        salary: document.querySelector('#salary')
    }
    
    const workProcess = {
        hireBtn: document.querySelector('#add-worker'),
        body: document.querySelector('#tbody'),
        budget: document.querySelector('#sum')
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
    
    const firedBtnFunctionality = (event) => {
        event.preventDefault()
        const parentElement = event.currentTarget.parentElement.parentElement
        workProcess.budget.textContent = (Number(workProcess.budget.textContent) - Number(parentElement.children[5].textContent)).toFixed(2)
        parentElement.remove()
        
    }
    
    const editBtnFunctionality = (event) => {
        const parentElement = event.currentTarget.parentElement.parentElement
        const [fName, lName, email, DateOfBirth, position, salary, _] = Array.from(parentElement.querySelectorAll('td'))
        
        worker.fName.value = fName.textContent
        worker.lName.value = lName.textContent
        worker.email.value = email.textContent
        worker.DateOfBirth.value = DateOfBirth.textContent
        worker.position.value = position.textContent
        worker.salary.value = salary.textContent
        workProcess.budget.textContent = (Number(workProcess.budget.textContent) - Number(worker.salary.value)).toFixed(2)
        
        parentElement.remove()
    }

    const createWorkerElement = (data) => {
        const tr = createElement({tag: 'tr'})
        data.forEach(x => tr.appendChild(createElement({tag: 'td', textContent: x.value})))

        const td = createElement({tag: 'td'})
        td.appendChild(createElement({tag: 'button', textContent: 'Fired', className: ['fired'], buttonEven: {click: firedBtnFunctionality}}))
        td.appendChild(createElement({tag: 'button', textContent: 'Edit', className: ['edit'], buttonEven: {click: editBtnFunctionality}}))
        tr.appendChild(td)
        
        return tr
    }

    const hireBtnFunctionality = (event) => {
        event.preventDefault()
        const data = Object.values(worker)
        if (!checkCorrectInputs(data)) return
        workProcess.body.appendChild(createWorkerElement(data))
        workProcess.budget.textContent = (Number(workProcess.budget.textContent) + Number(worker.salary.value)).toFixed(2)
        clearInputFields(data)
    }
    
    
    workProcess.hireBtn.addEventListener('click', hireBtnFunctionality)
}

solve()