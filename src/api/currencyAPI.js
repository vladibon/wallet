import axios from 'axios';

const BASE_URL = `https://api.privatbank.ua/p24api`;

function fetchCurrency() {
  return fetch(`${BASE_URL}/pubinfo?json&exchange&coursid=5`).then(r => console.log(r.json()));
}

export default fetchCurrency;
