const modal = () =>{
let btnPressed;

function bindModal(btnSelector, modalSelector, closeSelector, destroy = false){
    const button = document.querySelectorAll(btnSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelectorAll(closeSelector),
          windows = document.querySelectorAll('[data-modal]');

          button.forEach(i =>{
            i.addEventListener('click', (e) =>{
                e.preventDefault();
                openModal();
                if(destroy === true ){
                  i.remove();
                }
                btnPressed = true;
            });
          });

          close.forEach(i =>{
              i.addEventListener('click', closeModal);
          });
          modal.addEventListener('click', (e) =>{
            if(e.target == modal){

              closeModal();
            }
          });
          function openModal(){
            windows.forEach(i =>{
              i.style.display = 'none';
            });
              modal.style.display = 'block';
              document.body.style.overflow = 'hidden';
          }

          function closeModal(){
            windows.forEach(i =>{
              i.style.display = 'none'
            });
            modal.style.display = 'none';
            document.body.style.overflow = '';
          }

          window.addEventListener('keydown', (e)=>{
            if(e.key == 'Escape'){
              closeModal();
            }
          });

}

function timeModal(selector, time, closeSelector){
    const modal = document.querySelector(selector);
    setTimeout(()=>{
        let display;
        document.querySelectorAll('[data-modal]').forEach(item =>{
            if(getComputedStyle(item).display !== 'none'){
                display = 'block';
            }
        });

        if(!display){
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
       
    }, time);

}

function modalByScroll(selector){
window.addEventListener('scroll', () =>{
if(!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= 
  document.documentElement.scrollHeight)){
    document.querySelector(selector).click();
  }

});
}


timeModal('.popup-consultation', 999999999);
modalByScroll('.fixed-gift');
bindModal('.button-design', '.popup-design', '.popup-design .popup-close', );
bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
}

export default modal;