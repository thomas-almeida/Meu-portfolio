//Filtro de novos projetos

let filtrar_novos = document.getElementById('news-posts')
let remove_filtros = document.getElementById('all-posts')
let notification = document.getElementById('notification')
let message = document.getElementById('message')
let closeMessage = document.getElementById('close-message')

//posts
let oldPost_1 = document.getElementById('old-post-1')

//filtrar apenas novos posts
filtrar_novos.addEventListener('click', function () {
    
    oldPost_1.style.display = 'none'
    notification.style.display = 'flex'
    message.innerText = '🔔 Você está vendo apenas os novos posts'
    notification.style.backgroundColor = 'rgb(0, 197, 99)'
    
})

//remover filtros
remove_filtros.addEventListener('click', function () {
    oldPost_1.style.display = 'block'
    notification.style.display = 'flex'
    message.innerText = '🔔 Você está vendo todos os posts'
    notification.style.backgroundColor = 'indigo'
})

// Fechando notificação
closeMessage.addEventListener('click', function () {
    notification.style.display = 'none'
})

