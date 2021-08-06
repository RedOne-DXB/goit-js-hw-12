import './css/styles.css';
import './js/fetchCountries';
import countriesTemplate from './templates/countries.hbs';

const DEBOUNCE_DELAY = 300;

const refs = {
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
}

fetchDamnCountry()
    .then(renderCountryCard)
    .catch(error => console.log(error));

function fetchDamnCountry(countryName) {
    return fetch('https://restcountries.eu/rest/v2/name/ukraine')
    .then(response => {
        return response.json();
    });
}

function renderCountryCard(country) {
    const markup = countriesTemplate(country[0]);
    refs.countryInfo.innerHTML = markup;
}