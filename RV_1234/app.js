var btnInfo = document.querySelectorAll('.info-btn')
var overlay = document.querySelector('.overlay')
var wrappers = document.querySelector('.wrapper')
var body = document.getElementsByClassName('body')[0]
var cards = document.querySelectorAll('.card')
var infoBoxs = document.querySelectorAll('.info__inner')
var closeBtn = document.querySelectorAll('.info__footer button')
var closeIcon = document.querySelectorAll('.info__header i')
var ofImgs = document.querySelectorAll('.of-img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var closeImgBtn = document.querySelector('.control.close')
var galleryImg = document.querySelector('.gallery__img img')
var gallery = document.querySelector('.gallery')
let imgName = document.getElementById('text').src
let image = document.getElementById('text')

console.log(imgName)
currentIndexCard = 0
currentIndexImg = 0


function createFunctionOpenWithIndex(index) {
    func = () => {
        overlay.style.backgroundImage='url(./img/bg.jpg)'
        overlay.style.filter='grayScale(0.7)'
        cards.forEach((item)=>{
            item.style.display='none'
        })
        item = infoBoxs[index];
        item.classList.toggle('hide');
    };
    return func;
};

function createFunctionCloseWithIndex(index) {
    func = () => {
        item = infoBoxs[index];
        overlay.style='unset';
        cards.forEach((element)=>{
            element.style.display=null;
        });
        item.classList.toggle('hide');
        console.log(index);
    };
    return func;
};

btnInfo.forEach((item, index)=>{
    uniqueShowFunc = createFunctionOpenWithIndex(index)
    item.addEventListener('click', uniqueShowFunc)
})

closeBtn.forEach((item, index)=>{
    uniqueCloseFunc = createFunctionCloseWithIndex(index);
    item.addEventListener('click', uniqueCloseFunc);
})

closeIcon.forEach((item, index)=>{
    uniqueCloseFunc = createFunctionCloseWithIndex(index);
    item.addEventListener('click', uniqueCloseFunc);
})

function showGallery(){
    if(currentIndexImg == 0){
        prev.classList.add('hide')
    }
    else{
        prev.classList.remove('hide')
    }

    if(currentIndexImg == 2){
        next.classList.add('hide')
    }
    else{
        next.classList.remove('hide')
    }

    currentIndex = currentIndexCard.toString() + currentIndexImg.toString()
    console.log(currentIndex)
    imgSource = `http://127.0.0.1:5500/Review/D1234/img/of${currentIndex}.jpg`
    console.log(imgSource)
    //display
    galleryImg.src = imgSource
    gallery.classList.add('show')
}

ofImgs.forEach((item, index)=>{
    item.addEventListener('click', function(){
        currentIndexCard = index
        console.log(currentIndexCard)
        console.log(currentIndexImg)
        showGallery()
    })
})

closeImgBtn.addEventListener('click', function(){
    gallery.classList.remove('show')
    currentIndexCard = 0
    currentIndexImg = 0
})

document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show')
        currentIndexCard = 0
        currentIndexImg = 0
    }
})

prev.addEventListener('click', function(){
    if(currentIndexImg>0){
        currentIndexImg--
        showGallery()
    }
})

next.addEventListener('click', function(){
    if(currentIndexImg<3){
        currentIndexImg++
        showGallery()
    }
})