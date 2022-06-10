const filter = () =>{
    const menu = document.querySelector('.portfolio-menu'),
          items = document.querySelectorAll('li'),
          btnAll = document.querySelector('.all'),
          btnLovers = document.querySelector('.lovers'),
          btnChef = document.querySelector('.chef'),
          btnGirl = document.querySelector('.girl'),
          btnGuy = document.querySelector('.guy'),
          btnGranMother = document.querySelector('.grandmother'),
          btnGrandDad = document.querySelector('.granddad'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markGirl = wrapper.querySelectorAll('.girl'),
          markLovers = wrapper.querySelectorAll('.lovers'),
          markChef = wrapper.querySelectorAll('.chef'),
          markGuy = wrapper.querySelectorAll('.guy'),
          no = document.querySelector('.portfolio-no');


    const typeFilter = (markType) =>{
        markAll.forEach(i =>{
            i.style.display = 'none';
            i.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if(markType){
            markType.forEach(i =>{
                i.style.display = 'block';
                i.classList.add('animated', 'fadeIn');
            });
        }else{
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    btnAll.addEventListener('click', ()=>{
        typeFilter(markAll);
    });

    btnLovers.addEventListener('click', ()=>{
        typeFilter(markLovers);
    });

    btnChef.addEventListener('click', ()=>{
        typeFilter(markChef);
    });

    btnGirl.addEventListener('click', ()=>{
        typeFilter(markGirl);
    });
    
    btnGuy.addEventListener('click', ()=>{
        typeFilter(markGuy);
    });

    btnGrandDad.addEventListener('click', ()=>{
        typeFilter();
    });

    btnGranMother.addEventListener('click', ()=>{
        typeFilter();
    });

    menu.addEventListener('click', (e) =>{
        if(e.target && e.target.tagName == 'LI'){
            items.forEach(i =>{
                i.classList.remove('active');
            });
            e.target.classList.add('active');
        }
    })
};

export default filter;