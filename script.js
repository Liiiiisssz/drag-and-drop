const draggables = document.querySelectorAll('.draggable')
const dropzone = document.querySelector('.dropzone')

const texto = document.querySelector('.texto')

let dragged = null

draggables.forEach(item =>{
    item.setAttribute('draggable', 'true')

    const originalParent = item.parentElement

    item.addEventListener('dragstart', (event) =>{
        dragged = event.currentTarget
        dropzone.classList.add('possible-drop')
    })

    item.addEventListener('click', function(){
        originalParent.appendChild(item)
    })
})

dropzone.addEventListener('dragenter', (event) =>{
    event.preventDefault()
    dropzone.classList.add('over')
})

dropzone.addEventListener('dragover', (event) =>{
    event.preventDefault()
})

dropzone.addEventListener('dragleave', ()=>{
    dropzone.classList.remove('over')
})

dropzone.addEventListener('drop', (event) =>{
    event.preventDefault()
    texto.textContent = ""
    dropzone.classList.remove('over')
    if(dragged){
        dropzone.appendChild(dragged)
    }
})
