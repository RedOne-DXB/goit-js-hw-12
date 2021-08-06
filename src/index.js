import './css/styles.css';
import API from './js/fetchCountries';
import countryCardTemplate from './templates/countryCard.hbs';
import countryListCardTemplate from './templates/countryListCard';
import Notiflix from "notiflix";
import { getRefs } from './js/refs';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const refs = getRefs();
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
        Notiflix.Notify.failure('Oops, there is no country with that name');
    } else if (country.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    }
}