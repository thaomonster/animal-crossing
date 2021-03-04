import React from 'react';

const VillagerList = ({villagers}) => {

  const card = () => {
    return villagers.map(villager => {
      return (
        <section key={villager.id} id={villager.id}>
          <div>
            <img src={villager.icon_uri} alt='villager icon' />
            <p>{villager.name['name-USen']}</p>
          </div>
        </section>
      )
    })
  }

  return ( 
    <main>
      {card()}
    </main>
  )
}

export default VillagerList;