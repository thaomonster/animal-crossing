import React from 'react';
import leafIcon from '../../assets/leaf-icon.png';

const Header = () => {

  return (
    <header>
       <h1>ACNH Collections</h1>
       <img className='header-leaf' src={leafIcon} alt='Leaf Icon' />
       <input
          type='text'
          placeholder='Search Villagers'
          aria-label='Search Villagers'
        />
    </header>
  )
}

export default Header