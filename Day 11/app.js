var btnSuccess = document.querySelector('.control__success');
var btnWarning = document.querySelector('.control__warning');
var btnError = document.querySelector('.control__error');

function toast({
    message='',
    type='',
})
{
    var main = document.getElementById('toasts');
    if (main) {
        var toast = document.createElement('div');
        
        var icons = {
            success: 'fa-solid fa-circle-check',
            warning: 'fa-solid fa-circle-exclamation',
            error: 'fa-solid fa-triangle-exclamation'
        };
        toast.classList.add('toast',`toast--${type}`);
        var icon = icons[type];
        
        toast.innerHTML = `
                <div class="icon">
                    <i class="${icon}"></i>
                </div>
                <span class="message">${message}</span>
                <div class="countdown"></div>
        `;
        toast.style.animation = `slide_show 2s forwards, slide_hide 2s 4.2s forwards`;
        var countdown = toast.querySelector('.countdown');
        countdown.style.background = `var(--${type})`
        countdown.style.animation = `countdown 3s 1.2s ease`;

        main.appendChild(toast);

        setTimeout(function() {
            main.removeChild(toast);
        }, 7000)
    }
}

function showSuccessToast() {
    console.log('success');
    toast({
        message: 'This is Success message. Hello there!!!',
        type:'success'
    });
}

function showWarningToast() {
    console.log('warning');
    toast({
        message: 'This is Warning message. Be carefull!!!',
        type:'warning'
    });
}

function showErrorToast() {
    console.log('error');
    toast({
        message: 'This is Error message. Try again!!!',
        type:'error'
    });
}

btnSuccess.addEventListener('click', function(){
    showSuccessToast();
});

btnWarning.addEventListener('click', function(){
    showWarningToast()
});

btnError.addEventListener('click', function(){
    showErrorToast()
});