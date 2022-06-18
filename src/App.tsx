import React, { FC, useState } from 'react';
import FoodList from './Components/FoodList/FoodList';
import data from './Data/data.json'
import { foodData } from './types/FoodData';


const App:FC = () => {
  const [state, setState] = useState<foodData[]>(data.data)
  
  return (
    <div className="App">
      <FoodList state={state}/>
    </div>
  );
}

export default App;
