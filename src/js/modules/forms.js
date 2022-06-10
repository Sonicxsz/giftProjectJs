import {postData} from '../service/server';
function forms(state){
const form = document.querySelectorAll('form');
const upload = document.querySelectorAll('[name="upload"]');


const message = {
    succes: 'Данные отправлены',
    fail: 'Что-то пошло не так',
    waiting: 'Отправляются....',
    spin: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    failure: 'assets/img/fail.png'
};
const statusText = document.createElement('div');

upload.forEach(i =>{
    i.addEventListener('input', () =>{
        let dots;
        const arr = i.files[0].name.split('.');
        arr[0].length > 6 ? dots = '...' : dots = '.';
        let name = arr[0].substring(0, 6) + dots + arr[1];
        i.previousElementSibling.textContent = name;
    });
});

form.forEach(i =>{
    i.addEventListener('submit', (e)=>{
        e.preventDefault();
        i.classList.add('animated', 'fadeOutUp');
        setTimeout(()=>{
            i.style.display = 'none';
        }, 400);
        const statusM = document.createElement('div');
              statusM.classList.add('status');
              statusM.classList.add('animated', 'fadeInUp');
              i.parentNode.append(statusM);
              statusText.textContent = message.waiting;
        
        const statusImg = document.createElement('img');
        statusImg.setAttribute('src', message.spin);
        statusM.appendChild(statusImg);
        statusM.appendChild(statusText);
        
              

        const formData = new FormData(i);
        if(i.getAttribute('data-calc') == 'end'){
            for(let key in state){
                formData.append(key, state[key]);
            }
        }
        const path = {
            serviceImg: 'assets/service.php',
            server: 'assets/server.php'
        };

        let api;

        i.closest('.popup-design') || i.classList.contains('calc-form') ? api = path.serviceImg : api = path.server;

        postData(api, formData)
        .then(data =>{
            console.log(data)
            statusImg.setAttribute('src', message.ok);
            statusText.textContent = message.succes;
        })
        .catch(data =>{
            statusImg.setAttribute('src', message.failure);
            statusText.textContent = message.fail;
           
        })
        .finally(() =>{
            i.reset();
            setTimeout(()=>{
                upload.forEach(i =>{
                    i.previousElementSibling.textContent = 'файл не выбран';
                })
                statusM.remove();
                i.classList.remove('fadeOutUp');
                i.classList.add('fadeInUp');
                i.style.display = 'block';
            }, 3000);
        });

    });
});




}

export default forms;