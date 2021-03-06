import {getResource} from '../service/server';

function showMoreStyles(selector){
    const btn = document.querySelector(selector);

   btn.addEventListener('click', function(){
	getResource('http://localhost:3000/styles')
	.then(data =>{
        createCard(data)
    });
    this.remove();
   

   });

   function createCard(response){
    response.forEach(({src, title, link}) =>{

        const div = document.createElement('div');
        div.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'styles-2', 'animated', 'fadeInUp');

        div.innerHTML = `
        <div class=styles-block>
            <img src=${src} alt>
                <h4>${title}</h4>
                <a href=${link}>Подробнее</a>
            </div>
        `;
        document.querySelector('.styles .row').appendChild(div);

    });
}
}

export default showMoreStyles;

