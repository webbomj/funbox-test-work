import s from './FoodList.module.css'
import FoodItem from '../FoodItem/FoodItem';
import { FC } from 'react';
import { foodData } from '../../App';

const FoodList:FC<{state: foodData[]}> = ({state}) => {
  return (
    <div className={s.foodList}>
      <h1 className={s.header}>Ты сегодня покормил кота?</h1>
      {state.map(el => <FoodItem key={el.id} state={el}/>)}
    </div>
  );
};

export default FoodList;