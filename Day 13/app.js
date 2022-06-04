var upload = document.querySelector('#mypicture');
var preview = document.querySelector('.preview');
var error = document.querySelector('.error');

upload.addEventListener('change', function(e){
    var file = upload.files[0];

    // var format = file.type.slice(6,file.type.length);
    // console.log(format);
    // console.log(file.type);

    if (!file)
        return;
    if(file.type != 'image/jpeg'){
        error.innerHTML= `Chon anh thuoc dinh dang jpg hoac jpeg`;
        return
    }else {
        error.innerHTML = ``;
    }

    if(file.size / (1024*1024) > 5){
        error.innerHTML= `Chon anh co kich thuoc nho hon 5MB`;
        return
    }else {
        error.innerHTML = ``;
    }

    var img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    preview.appendChild(img);
})