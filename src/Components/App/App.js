import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import apiCalls from '../../apiCalls';
import VillagerList from '../VillagerList/VillagerList';
import ProfilePage from '../ProfilePage/ProfilePage';


const App = () => {
  const [villagers, setVillagers] = useState([]);
  // const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    apiCalls.getAllVillagers()
      .then(data => setVillagers(data))
  }, [])

  const getSearchedVillagers = (inputValue) => {
    const filterVillagers = villagers.filter(villager => {
      console.log(villager.name['name-USen'])
      return villager.name['name-USen'].toLowerCase().includes(inputValue)
    })
    setVillagers(filterVillagers)
  }

  return (
    <>
      <Header 
        getSearchedVillagers={getSearchedVillagers}
      />
      <Route 
        exact path='/' 
        render={() => <VillagerList villagers={villagers}/>}
      />
      <Route 
        path='/:id'
        component={ ProfilePage }
      />
    </>
  );
}

export default App;
