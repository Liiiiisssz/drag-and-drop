const draggables = document.querySelectorAll('.draggable')
const dropzone = document.querySelector('.dropzone')

const texto = document.querySelector('.texto')
const display = document.querySelector('.contador')

let dragged = null
let contador = 0

function attTextDropzone(){
    const qtd = dropzone.querySelectorAll('img').length
    if(qtd === 0){
        texto.textContent = "Solte Aqui"
    } else {
        texto.textContent = "";
    }
    display.textContent = qtd
}

draggables.forEach(item =>{
    item.setAttribute('draggable', 'true')

    const originalParent = item.parentElement

    item.addEventListener('dragstart', (event) =>{
        dragged = event.currentTarget
        dropzone.classList.add('possible-drop')
    })

    item.addEventListener('click', function(){
        originalParent.appendChild(item)
        attTextDropzone()
    })

    //-----------------------------------------
    originalParent.addEventListener('dragover', (event) =>{
        event.preventDefault()
    })
    
    originalParent.addEventListener('drop', (event) =>{
        event.preventDefault()
        originalParent.classList.remove('over')
        if(dragged){
            originalParent.appendChild(dragged)
        }
        attTextDropzone()
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
    dropzone.classList.remove('over')
    if(dragged){
        dropzone.appendChild(dragged)
    }
    attTextDropzone()
})
