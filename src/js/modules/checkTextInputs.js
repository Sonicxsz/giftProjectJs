function checkText (selector){
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(i =>{
        i.addEventListener('keypress', (e) =>{
            if(e.key.match(/[^а-яё 0-9]/ig)){
                e.preventDefault();
            }
        });
    });
};

export default checkText;