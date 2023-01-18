import React from 'react';
import { useCountries } from '../../hooks/useCountries.js';

export default function Main() {
  const countries = useCountries();
  console.log('countries', countries);
  return <main></main>;
}
