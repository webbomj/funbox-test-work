import React, { FC, useState } from 'react';
import { foodData } from '../../App';
import s from './FoodItem.module.css'
import Photo from '../../images/Photo.png'
import FoodItemBottom from './FoodItemBottom';

const FoodItem:FC<{state: foodData}> = ({state}) => {
  const [isSelected, setIsSelected] = useState(false)

  

  return (
    <div className={s.FoodItem}>
      <div className={isSelected ? s.cardBorder + ' ' + s.isSelected : s.cardBorder}>
        <div className={s.wrapperContent}>
        <div className={s.topTitle}>Сказочное заморское яство</div>
        <div className={s.productName}>{state.productName}</div>
        <div className={s.taste}>{state.taste}</div>
        <div className={s.portions + " " + s.topPortions}>
          <span>{state.portions}</span> порций</div>
        <div className={s.portions + " " + s.botPortions}>
        <span>{state.presentsMouse === 1 ? '' : state.presentsMouse}</span>
          {state.presentsMouse <= 4
            ?
            " мыши"
            :
            " мышей"
          } в подарок
        </div>
        <div className={s.portions + " " + s.botPortions}>{state.satisfied}</div>
        <img className={s.photo} src={Photo}/>
        <div className={s.weightWrapper}>
          <span className={s.weightCount}>{state.weight}</span>
          <span className={s.weight}>кг</span>
        </div>
        </div>
      </div>
      <p className={s.bottomText}>
        <FoodItemBottom 
          isSelected={isSelected}
          isBlocked={!state.inStock}
          taste={state.taste}
          description={state.description}/>
      </p>
    </div>
  );
};

export default FoodItem;