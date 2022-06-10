function calc(size, material, options, promocode, result, stateValue){
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promoBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
        if(sizeBlock.value == '' || materialBlock.value == ''){
            resultBlock.textContent = 'Выберите размер и материал картины';
        } else if(promoBlock.value === 'IWANTPOPART'){
            resultBlock.textContent = Math.round(sum * 0.7);
            stateValue.sum = sum;
        }else{
            resultBlock.textContent = sum;
            stateValue.sum = sum;
            
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promoBlock.addEventListener('input', calcFunc);
}

export default calc;