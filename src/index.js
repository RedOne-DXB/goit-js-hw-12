import { mark } from 'regenerator-runtime';
import './css/styles.css';
import './js/fetchCountries';
import countriesTemplate from './templates/countries.hbs';

const DEBOUNCE_DELAY = 300;

const refs = {
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
}

fetch('https://restcountries.eu/rest/v2/name/switzerland').then(response => {
    return response.json();
}).then(country => {
    console.log(country);
    const markup = countriesTemplate(country[0]);
    refs.countryInfo.innerHTML = markup;
}).catch(error => {
    console.log(error);
});
