import React, { FC, useState } from 'react';
import { foodData } from '../../App';
import s from './FoodItem.module.css'
import Photo from '../../images/Photo.png'
import FoodItemBottom from './FoodItemBottom';

const FoodItem:FC<{state: foodData}> = ({state}) => {
  const [isSelected, setIsSelected] = useState(false)

  

  return (
    <div className={s.FoodItem}>
      <div className={state.inStock ? s.cardBorder : `${s.cardBorder} ${s.borderBlocked}`}>
        <div className={s.wrapperContent}>
        <div className={state.inStock ? s.topTitle : `${s.topTitle} ${s.textBlocked}`}>Сказочное заморское яство</div>
        <div className={state.inStock ? s.productName : `${s.productName} ${s.textBlocked}`}>{state.productName}</div>
        <div className={state.inStock ? s.taste : `${s.taste} ${s.textBlocked}`}>{state.taste}</div>
        <div className={state.inStock ? `${s.portions} ${s.topPortions}` : `${s.portions} ${s.topPortions} ${s.textBlocked}`}>
          <span>{state.portions}</span> порций</div>
        <div className={state.inStock ? `${s.portions} ${s.botPortions}` : `${s.portions} ${s.botPortions} ${s.textBlocked}`}>
        <span>{state.presentsMouse === 1 ? '' : state.presentsMouse}</span>
          {state.presentsMouse <= 4
            ?
            " мыши"
            :
            " мышей"
          } в подарок
        </div>
        <div className={state.inStock ? `${s.portions} ${s.botPortions}` : `${s.portions} ${s.botPortions} ${s.textBlocked}`}>{state.satisfied}</div>
        <img className={state.inStock ? s.photo : `${s.photo} ${s.photoBlocked}`} src={Photo}/>
        <div className={state.inStock ? s.weightWrapper : `${s.weightWrapper} ${s.weightBlocked}`}>
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