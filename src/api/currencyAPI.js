import axios from 'axios';

async function fetchCurrency() {
  const { data } = await axios('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');

  return data;
}

export { fetchCurrency };

// const BASE_URL = `https://api.privatbank.ua/p24api`;

// function fetchCurrency() {
//   return fetch(`${BASE_URL}/pubinfo?json&exchange&coursid=5`).then(r => r.json());
// }

// export default fetchCurrency;
