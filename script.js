const draggable = document.querySelector('.draggable')
const dropzone = document.querySelector('.dropzone')
const originalParent = draggable.parentElement

dropzone.addEventListener('dragenter', (event) =>{
    event.preventDefault()
    dropzone.classList.add('over')
})

dropzone.addEventListener('dragover', (event) =>{
    event.preventDefault()
})

dropzone.addEventListener('drop', (event) =>{
    event.preventDefault()
    dropzone.appendChild(draggable)
})

draggable.addEventListener('click', function(){
    originalParent.appendChild(draggable)
})