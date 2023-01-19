// imports
import { client, checkError } from './client.js';

export async function fetchCountries() {
  const resp = await client.from('countries').select('*');
  return checkError(resp);
}
