import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/getCountries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountries();
      setCountries(resp);
    };
    fetchData();
  }, []);
  return countries;
}
