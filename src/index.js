import './css/styles.css';
import './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

fetch('https://restcountries.eu/rest/v2/name/united').then(response => {
    return response.json();
}).then(country => {
    console.log(country);
}).catch(error => {
    console.log(error);
});