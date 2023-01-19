import { useState } from 'react';
import { useCountries } from '../../hooks/useCountries.js';
import CountryCard from '../CountryCard/CountryCard.js';

export default function Main() {
  const { countries, error } = useCountries();
  const [continent, setContinent] = useState('all');
  // remove duplicates
  const continents = [...new Set(countries.map(({ continent }) => continent))];

  const filtered = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );

  return (
    <main>
      <h1>Countries of the World</h1>
      <p style={{ color: 'red' }}>{error}</p>

      {/* select dropdown for filtering countries */}
      <select onChange={(e) => setContinent(e.target.value)}>
        <option value="all">all</option>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>

      {filtered.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </main>
  );
}
