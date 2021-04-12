const baseURL = 'https://restcountries.eu/rest/v2/';

function fetchCountries(searchQuery) {
    return fetch(`${baseURL}name/${searchQuery}`)
        .then(res => res.json());
}

export default {fetchCountries}