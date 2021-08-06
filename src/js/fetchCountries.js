const URL = 'https://restcountries.eu/rest/v2';

function fetchCountries(countryName) {
    return fetch(`${URL}/name/${countryName}`)
    .then(response => {
        return response.json();
    });
}

export default { fetchCountries };