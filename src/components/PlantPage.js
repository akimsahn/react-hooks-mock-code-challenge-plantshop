import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(plantData => setPlants(plantData))
  },[]);

  function handleNewPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  function handleSearch(searchText) {
    setSearch(searchText)
  }

  const plantsToDisplay = plants.filter(plant => (
    search === "" ? true : plant.name.toUpperCase().indexOf(search.toUpperCase()) > -1
  ))

  return (
    <main>
      <NewPlantForm onSubmitForm={handleNewPlant} />
      <Search searchText={search} onSearch={handleSearch} />
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
