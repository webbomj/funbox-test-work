import React, { FC, useState } from 'react';
import './App.css';
import FoodList from './Components/FoodList/FoodList';
import data from './Data/data.json'

export interface foodData {
  id: number,
  productName: string,
  taste: string,
  portions: number,
  presentsMouse: number,
  weight: number,
  description: string,
  satisfied: string,
  inStock: boolean
}

const App:FC = () => {
  const [state, setState] = useState<foodData[]>(data.data)
  
  return (
    <div className="App">
      <FoodList state={state}/>
    </div>
  );
}

export default App;
