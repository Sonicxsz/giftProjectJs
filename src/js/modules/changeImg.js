function changeImg(selector){
const blocks = document.querySelectorAll(selector);

blocks.forEach(i =>{
    const img = i.querySelector('img'),
          text = i.querySelectorAll('p:not(.sizes-hit)');
          
    img.addEventListener('mouseover', showImg);
    img.addEventListener('mouseleave', hideImg);
   

    function showImg(){
        i.classList.add('animated', 'fadeIn');
        text.forEach(j =>{
            j.style.display = "none"
        });
        img.src = img.src.slice(0, -4) + '-1.png';
    }

    function hideImg(){
        text.forEach(j =>{
            j.style.display = "block"
        })
        img.src = img.src.slice(0, -6) + '.png';
    }

});


}

export default changeImg;