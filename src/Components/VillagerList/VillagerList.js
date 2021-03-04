import React from 'react';
import leafGreen from '../../assets/leaf-green.png';
import leafBlue from '../../assets/leaf-blue.png';

const VillagerList = ({villagers}) => {

  const card = villagers.map(villager => {
    return (
      <section key={villager.id} id={villager.id} >
        <article className='card'>
          <div className='thumbnail-img'>
            <img src={villager.icon_uri} alt='villager icon' />
            <p>{villager.name['name-USen']}</p>
          </div>
          <img 
            className='card-leaf' 
            src={leafBlue} 
            alt='Leaf Icon'
            />
        </article>
      </section>
    )
  })

  return ( 
    <main className='card-container'>
      {card}
    </main>
  )
}

export default VillagerList;