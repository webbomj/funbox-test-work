import React from 'react';
import s from './FoodItem.module.css'

const FoodItem = () => {
  return (
    <div className={s.FoodItem}>
      <div className={s.cardBorder}>
      </div>
      <p className={s.bottomText}>
        Чего сидишь? Порадуй котэ, <a href="#">купи.</a>
      </p>
    </div>
  );
};

export default FoodItem;