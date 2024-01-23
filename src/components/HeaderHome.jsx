import React from 'react'

const HeaderHome = () => {

  return (
    <header className='containerHeader'>
      <span>🌍</span>
      <h1>Explore the World, One Country at a Time</h1>
      <div className='buttonsHeader'>
        <a href="#introduction"><button id='btn1'>Start Exploring</button></a>
        <button id='btn2'>Search Countries</button>
      </div>
    </header>
  )
}

export default HeaderHome