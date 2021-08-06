import './css/styles.css';
import API from './js/fetchCountries';
import countryCardTemplate from './templates/countryCard.hbs';
import countryListCardTemplate from './templates/countryListCard';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const refs = {
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
    searchBox: document.querySelector('#search-box'),
}

refs.searchBox.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
    const searchKey = evt.target.value;
    if (searchKey.trim('') === '') {
        return;
    }
console.log(searchKey);


    API.fetchCountries(searchKey)
    .then(renderCountryCard)
    .catch(error => console.log(error));
}

function renderCountryCard(country) {
    if (country.length === 1) {
         const markup = countryCardTemplate(country[0]);
    refs.countryInfo.innerHTML = markup;
    } else if (country.length >= 2 && country.length < 10) {
        const listMarkup = countryListCardTemplate(country)
        refs.countryList.innerHTML = listMarkup;
    } else if (country.status === 404) {
        console.log('Such a country NOT FOUND');
    } else if (country.length > 10) {
        console.log('Too many countries')
    }
   
}