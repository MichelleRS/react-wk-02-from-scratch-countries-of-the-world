import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/getCountries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
      } catch (e) {
        setError('There was an error');
      }
    };
    fetchData();
  }, []);
  return { countries, error };
}
