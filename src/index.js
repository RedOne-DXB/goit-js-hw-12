import './css/styles.css';
import API from './js/fetchCountries';
import countriesTemplate from './templates/countries.hbs';

const DEBOUNCE_DELAY = 300;

const refs = {
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
}


API.fetchCountries('suriname')
    .then(renderCountryCard)
    .catch(error => console.log(error));

function renderCountryCard(country) {
    const markup = countriesTemplate(country[0]);
    refs.countryInfo.innerHTML = markup;
}