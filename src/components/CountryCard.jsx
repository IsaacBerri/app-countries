import React from 'react'

const CountryCard = ({data}) => {
  return (
    <article className='countryCard'>
      <img src={`https://flagsapi.com/${data.code}/flat/64.png`}></img>
      <h3>{data.name}</h3>
      <p>{data.continent.name}</p>
    </article>
  )
}

export default CountryCard