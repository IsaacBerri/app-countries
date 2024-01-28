import React from 'react'

const CountryCard = ({data}) => {
  return (
    <article>
      <h3>{data.name}</h3>
      <p>{data.capital}</p>
    </article>
  )
}

export default CountryCard