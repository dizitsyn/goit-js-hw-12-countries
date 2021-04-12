import '@pnotify/core/dist/PNotify.css';
import './styles.css'
import countryTemplate from './templates/template.hbs'
import countriesListTemplate from './templates/countriesList.hbs'
import api from './js/fetchCountries.js'
import { alert } from '@pnotify/core'
import debounce from 'lodash.debounce'



const inputRef = document.querySelector('input');
const divRef = document.querySelector('.countryBox');
const ulRef = document.querySelector('.countryList');

inputRef.addEventListener('input', debounce(countrySearch, 500));





function countrySearch(e) {
   let inputCountry = e.target.value;
    if(inputCountry!=''){
    api.fetchCountries(inputCountry)
        .then(lengthCompare)}
    clearInput()
}

function lengthCompare(data) {
    console.log(data.length);
    if (data.length === undefined) {
        alert({
        text: 'Повнимательнее, пожалуйста',
        delay:2000
  });
    }
    
        else if (2 <= data.length && data.length <= 10) {
        countriesListRender(data)
        divRef.style.display = 'none';
        ulRef.style.display = 'block';
    }

    else if (data.length === 1) {
        countryRender(data)
        divRef.style.display = 'block';
        ulRef.style.display = 'none';
    }

        else if (data.length > 10) {
            divRef.style.display = 'none';
            ulRef.style.display = 'none';
            
            
    alert({
        text: 'Много совпадений. Необходимо сделать запрос более специфичным!',
        delay:2000
  });
    }

}



function countryRender(data) {
    document.querySelector('.countryBox').innerHTML = countryTemplate(data) 

    
}
 
function countriesListRender(data) {
    document.querySelector('.countryList').innerHTML = countriesListTemplate(data)
    
 }

function clearInput() {
    document.querySelector('.countryList').innerHTML = '';
    document.querySelector('.countryBox').innerHTML = '';
}