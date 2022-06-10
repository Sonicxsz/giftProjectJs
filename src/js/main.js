import modal from './modules/modals';
import slider from './modules/slider';
import forms from './modules/forms';
import phoneInput from './modules/phoneInput';
import checkText from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyle';
import calc from './modules/calc';
import filter from './modules/filter';
import changeImg from './modules/changeImg';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';


window.addEventListener('DOMContentLoaded', ()=>{
    "use strict"
    let stateValue = {};
    scrolling('.pageup');
    burger('.burger', '.burger-menu');
    accordion('.accordion-heading');
    filter();
    slider('.main-slider-item', '', '',  'horiz');
    slider('.feedback-slider-item', '.main-prev-btn', '.main-next-btn');
    modal();
    forms(stateValue);
    phoneInput('[name="phone"]');
    checkText('[name="name"]');
    checkText('[name="message"]');
    showMoreStyles('.button-styles');
    calc('#size', '#material', '#options', '.promocode', '.calc-price', stateValue);
    changeImg('.sizes-block');
    drop();
});