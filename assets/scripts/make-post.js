var postBtn = document.getElementById('post-btn')
var postArea = document.getElementById('post-area')
var Description = document.getElementById('description')

var postImg = document.getElementById('post-img')




const defaultBtn = document.getElementById('default-btn')
const customBtn = document.getElementById('post-img')
const previewImage = document.getElementById('preview-img')



postBtn.addEventListener('click', function () {

    //Criando elementos
    var post = document.createElement('section')
    var userPostSection = document.createElement('section')
    var pictureBox = document.createElement('img')
    var userName = document.createElement('h2')
    var timePosted = document.createElement('p')
    var postDescription = document.createElement('h3')
    var actions = document.createElement('section')
    var likePost = document.createElement('a')


    //dando classes
    post.classList.add('post')
    userPostSection.classList.add('user-post-section')
    timePosted.classList.add('time-posted')
    postDescription.classList.add('post-description')
    actions.classList.add('actions')
    pictureBox.classList.add('picture-box')
    pictureBox.classList.add('profile-img-post')

    //Add Imagem ao post (opcional)

    postDescription.innerText = Description.value
    likePost.innerText = 'Curtir'
    timePosted.innerText = 'postado há 1 seg'
    pictureBox.src = './assets/images/profile-pic-koala.png'
    userName.innerText = 'ShitPoster_001'

    postArea.appendChild(post)

    //section, img, h2 
    post.appendChild(userPostSection)
    userPostSection.appendChild(pictureBox)
    userPostSection.appendChild(userName)

    //p
    post.appendChild(timePosted)

    //h3
    post.appendChild(postDescription)

    //sections,a
    post.appendChild(actions)
    actions.appendChild(likePost)

    //limpando campo de post
    Description.value = ""

    var imgPath = document.getElementById('image-path')
    var inputFile = document.getElementById('input-file')
    var imgPost = document.getElementById('image-post')

    imgPath.innerText = inputFile.value
    imgPost.src = inputFile.value

})


customBtn.addEventListener('click', function () {

   
})