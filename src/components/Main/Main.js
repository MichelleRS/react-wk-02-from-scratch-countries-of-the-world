import React from 'react';
import { useCountries } from '../../hooks/useCountries.js';
import CountryCard from '../CountryCard/CountryCard.js';

export default function Main() {
  const { countries, error } = useCountries();
  return (
    <main>
      <h1>Countries of the World</h1>
      <p style={{ color: 'red' }}>{error}</p>
      {countries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </main>
  );
}
