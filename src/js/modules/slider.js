function slider (slide, prev, next, dir){
let slideIndex = 1;
let paused;
const slides = document.querySelectorAll(slide);
     


      function showSlides(n){

        if(n > slides.length){
            slideIndex = 1;
        }

        if(n < 1){
            slideIndex = slides.length;
        }

        slides.forEach(i =>{
            i.classList.add('animated');
            i.style.display = 'none';
        });

        slides[slideIndex - 1].style.display = 'block';
      } 

      function callSlide(n){
          slideIndex += n;
          showSlides(slideIndex);
      }
      callSlide(1);

     try {
         const  btnPrev = document.querySelector(prev),
                btnNext = document.querySelector(next);
         btnNext.addEventListener('click', () =>{
 
            callSlide(1);
            slides[slideIndex - 1].classList.remove('slideInLeft');
            slides[slideIndex - 1].classList.add('slideInRight');
         });
         btnPrev.addEventListener('click', () =>{
            callSlide(-1);
            slides[slideIndex - 1].classList.remove('slideInRight');
            slides[slideIndex - 1].classList.add('slideInLeft');
         });
     } catch (e) {
         console.log(e);
     }

     function activeAnimation(){

        if(dir === 'horiz'){
           paused = setInterval(()=>{
                callSlide(1);
                slides[slideIndex -1].classList.add('slideInDown');
             }, 3000);
         }else{
           paused = setInterval(()=>{
                callSlide(1);
                slides[slideIndex - 1].classList.remove('slideInLeft');
                slides[slideIndex - 1].classList.add('slideInRight');
             }, 3000);
         }
     }
     activeAnimation();

     slides[0].parentNode.addEventListener('mouseenter', ()=>{
         clearInterval(paused)
     });
     slides[0].parentNode.addEventListener('mouseleave', ()=>{
        activeAnimation();
    });
     

  
    
    



}

export default slider;