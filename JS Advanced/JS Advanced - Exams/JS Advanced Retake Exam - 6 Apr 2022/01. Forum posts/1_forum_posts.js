window.addEventListener("load", solve);

function solve() {
    const post = {
        title: document.querySelector('#post-title'),
        category: document.querySelector('#post-category'),
        content: document.querySelector('#post-content')
    }

    const forumBtns = {
        publishBtn: document.querySelector('#publish-btn'),
        clearBtn: document.querySelector('#clear-btn')
    }

    const forum = {
        reviewList: document.querySelector('#review-list'),
        publishedList: document.querySelector('#published-list')
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
        const elementHtml = event.currentTarget.parentNode
        const [title, category, content] = Array.from(elementHtml.querySelectorAll('h4, p'))
        post.title.value = title.textContent
        post.category.value = category.textContent.split(': ')[1]
        post.content.value = content.textContent.split(': ')[1]
        
        elementHtml.remove()
    }
    
    const approveBtnFunctionality = (event) => {
        const elementHtml = event.currentTarget.parentNode
        const [edit, approve] = Array.from(elementHtml.querySelectorAll('button'))
        edit.remove()
        approve.remove()
        forum.reviewList.removeChild(elementHtml)
        forum.publishedList.appendChild(elementHtml)
    }

    const createPostElement = (data) => {
        const li = createElement({tag: 'li', className: ['rpost']})
        const article = createElement({tag: 'article'})
        article.appendChild(createElement({tag: 'h4', textContent: post.title.value}))
        article.appendChild(createElement({tag: 'p', textContent: `Category: ${post.category.value}`}))
        article.appendChild(createElement({tag: 'p', textContent: `Content: ${post.content.value}`}))
        li.appendChild(article)
        
        li.appendChild(createElement({tag: 'button', textContent: 'Edit', className: ['action-btn', 'edit'], buttonEven: {click: editBtnFunctionality}}))
        li.appendChild(createElement({tag: 'button', textContent: 'Approve', className: ['action-btn', 'approve'], buttonEven: {click: approveBtnFunctionality}}))
        
        return li
    }

    const publishBtnFunctionality = (event) => {
        event.preventDefault()
        const data = Object.values(post)
        if (!checkCorrectInputs(data)) return
        
        forum.reviewList.appendChild(createPostElement(post))
        clearInputFields(data)
        
    }
    
    const clearBtnFunctionality = () => {
        forum.publishedList.innerHTML = ''
    }
    
    forumBtns.publishBtn.addEventListener('click', publishBtnFunctionality)
    forumBtns.clearBtn.addEventListener('click', clearBtnFunctionality)

}

// solve()
