import React, { FC } from 'react';
import { foodData } from '../../App';
import s from './FoodItem.module.css'

const FoodItem:FC<{state: foodData}> = ({state}) => {
  return (
    <div className={s.FoodItem}>
      <div className={s.cardBorder}>
        <div>
        {state.productName}
        </div>
      </div>
      <p className={s.bottomText}>
        Чего сидишь? Порадуй котэ, <a href="#">купи.</a>
      </p>
    </div>
  );
};

export default FoodItem;