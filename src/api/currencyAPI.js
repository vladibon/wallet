import axios from 'axios';
import { API_BASE_URL } from 'variables';

async function fetchCurrency() {
  const { data } = await axios(`${API_BASE_URL}/api/currency`);

  return data;
}

export { fetchCurrency };
