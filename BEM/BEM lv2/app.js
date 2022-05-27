// Quan trọng

function toast({
    title='',
    mess='',
    type='info',
    duration=3000
})  {
        var main = document.getElementById('toast');
        if (main) {
            var toast = document.createElement('div');

            // auto remove toast
            const autoRemoveId = setTimeout(function() {
                main.removeChild(toast);
            }, duration + 1000)

            // remove toast when clicked
            toast.onclick = function(e){
                console.log(e.target)
                if (e.target.closest('.toast__close'))
                {
                    main.removeChild(toast);
                    clearTimeout(autoRemoveId);
                }
            }

            var icons =  {
                success: 'fa-solid fa-circle-check',
                info: 'fa-solid fa-circle-info',
                warning: 'fa-solid fa-circle-exclamation',
                error: 'fa-solid fa-triangle-exclamation'
            };

            var icon = icons[type];
            var delay = (duration/1000).toFixed(2);
            toast.classList.add('toast', `toast--${type}`);
            toast.style.animation = `slideInLeft ease 0.5s, fadeOut linear 1s ${delay}s forwards`
            toast.innerHTML = `
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${mess}</p>
                </div>
                <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            `;
            main.appendChild(toast);
        }
    }

    function showSuccessToast() {
        toast({
            title: 'Success',
            mess: 'Chúc mừng, bạn đã hoàn thành bài tập ngày hôm nay! :smile:',
            type: 'success',
            duration: 3000
        });
    }

    function showInfoToast() {
        toast({
            title: 'Info',
            mess: 'Bài tập vận dụng BEM và JS khá là hay ho! xD',
            type: 'info',
            duration: 3000
        });
    }

    function showWarningToast() {
        toast({
            title: 'Warning',
            mess: 'Hãy xem kĩ lại video, ví dụ và code mẫu nhé! :afraid:',
            type: 'warning',
            duration: 3500
        });
    }

    function showErrorToast() {
        toast({
            title: 'Error',
            mess: 'Không học đi thì có mà có tiền! :sad:',
            type: 'error',
            duration: 4000
        });
    }
