import s from './FoodList.module.css'
import FoodItem from '../FoodItem/FoodItem';
import { FC } from 'react';
import { foodData } from '../../types/FoodData';


const FoodList:FC<{state: foodData[]}> = ({state}) => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.header}>Ты сегодня покормил кота?</h1>
      <div className={s.foodList}>
        {state.map(el => <FoodItem key={el.id} state={el}/>)}
      </div>
      
    </div>
  );
};

export default FoodList;