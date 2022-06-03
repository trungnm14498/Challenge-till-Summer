var process = document.querySelector('.process');
var range = document.querySelector('.range');
var value = document.querySelector('.process span');
var body = document.querySelector('body');

function updateProcess(percent){
    process.style.width = `${percent}%`;
    value.innerHTML = `${percent}%`
    body.style.background = `rgba(0,0,0,${percent/100})`;
}

updateProcess(40);

range.addEventListener('mousemove', function(e){
    // console.log(e.pageX);
    // console.log(this.offsetLeft);
    var processWidth = e.pageX - this.offsetLeft;
    
    /**e.pageX: vi tri cua con tro chuot hien tai
     * this.offsetLeft: this o day la range, offsetLeft la vi tri ngoai cung ben trai cua
     * div range den vi tri con tro chuot
     * -> processWidth chieu rong tinh tu diem ngoai cung ben trai the range den vi tri hien tai
     * cua con tro chuot*/
    var percent = processWidth / this.offsetWidth * 100;
    percent = Math.round(percent);
    updateProcess(percent);
});
