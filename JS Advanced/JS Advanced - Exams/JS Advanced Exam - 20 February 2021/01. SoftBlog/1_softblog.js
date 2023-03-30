function solve() {
    const inputFields = {
        author: document.querySelector('#creator'),
        title: document.querySelector('#title'),
        category: document.querySelector('#category'),
        content: document.querySelector('#content')
    }
    
    const blog = {
        createBtn: document.querySelector('.create'),
        archive: document.querySelector('ol'),
        posts: document.querySelector('main section')
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

    const clearInputFields = (dataFromInput => dataFromInput.forEach(x => x.value = ''))

    const deleteBtnFunctionality = (event) => {
        event.currentTarget.parentElement.parentElement.remove()
    }

    const archiveBtnFunctionality = (event) => {
        const currentContainer = event.currentTarget.parentElement.parentElement
        const title = currentContainer.querySelector('h1')
        blog.archive.appendChild(createElement({tag: 'li', textContent: title.textContent}))
        const liElements =  Array.from(document.querySelectorAll('ol li')).map(x => x.textContent).sort((a, b) => a.localeCompare(b))
        blog.archive.innerHTML = ''
        liElements.forEach(x => blog.archive.appendChild(createElement({tag: 'li', textContent: x})))
        currentContainer.remove()
    }

    const createPostElement = (data) => {
        const article = createElement({tag: 'article'})
        article.appendChild(createElement({tag: 'h1', textContent: data.title.value}))
        const strongCategory = createElement({tag: 'strong', textContent: data.category.value})
        const category = createElement({tag: 'p', textContent: `Category: `})
        category.appendChild(strongCategory)
        article.appendChild(category)

        const strongCreator = createElement({tag: 'strong', textContent: data.author.value})
        const creator = createElement({tag: 'p', textContent: `Creator: `})
        creator.appendChild(strongCreator)
        article.appendChild(creator)

        article.appendChild(createElement({tag: 'p', textContent: data.content.value}))
        const div = createElement({tag:'div', className: ['buttons']})
        div.appendChild(createElement({tag: 'button', textContent: 'Delete', className: ['btn', 'delete'], buttonEven: {click: deleteBtnFunctionality}}))
        div.appendChild(createElement({tag: 'button', textContent: 'Archive', className: ['btn', 'archive'], buttonEven: {click: archiveBtnFunctionality}}))
        article.appendChild(div)

        return article
    }

    const createBtnFunctionality = (event) => {
        event.preventDefault()
        const data = Object.values(inputFields)
        
        blog.posts.appendChild(createPostElement(inputFields))
        clearInputFields(data)
        
    }
    
    
    blog.createBtn.addEventListener('click', createBtnFunctionality)

}




