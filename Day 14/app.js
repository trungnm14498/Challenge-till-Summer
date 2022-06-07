var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-image img')
var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')

var currentIndex = 0;
function updateImageByIndex(index){
// remove active class
    document.querySelectorAll('.list-image div').forEach(item=>{
        item.classList.remove('active');
    })

    currentIndex = index;
    imgFeature.src = listImg[index].getAttribute('src');
    listImg[index].parentElement.classList.add('active');
}

listImg.forEach((imgElement,index)=>{
    imgElement.addEventListener('click', e=>{
        imgFeature.style.opacity = '0'

        setTimeout(()=>{
            updateImageByIndex(index);
            imgFeature.style.opacity = '1';
        }, 200)

        
    })
})

prevBtn.addEventListener('click', function() {
    if (currentIndex == 0)
    {
        currentIndex =listImg.length-1;    
    }
    else {
        currentIndex--
    }
    imgFeature.style.animation = '';
    
    setTimeout(()=>{
        imgFeature.style.animation = 'slideLeft 1s ease-in-out';  
    },0)

    setTimeout(()=>{
        updateImageByIndex(currentIndex);     
    }, 1000)
    
})

nextBtn.addEventListener('click', function() {
    if (currentIndex == listImg.length-1)
    {
        currentIndex = 0;    
    }
    else {
        currentIndex++
    }
    imgFeature.style.animation = '';
    
    setTimeout(()=>{
        imgFeature.style.animation = 'slideRight 1s ease-in-out';  
    },0)

    setTimeout(()=>{
        updateImageByIndex(currentIndex);     
    }, 1000)
})

updateImageByIndex(0);