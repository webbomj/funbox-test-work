import React, {FC} from 'react';
import { FoodItemBottomProps } from '../../types/FoodItemBottom';
import s from "./FoodItem.module.css"

const FoodItemBottom:FC<FoodItemBottomProps> = (
  {isSelected, 
    isBlocked,
    taste,
    description,
    click
  }) => {
  if (isBlocked) return <div className={s.bottomBlocked}>Печалька, {taste} закончился.</div>
  if (isSelected && !isBlocked) return <>{description}</>
  else return  <>Чего сидишь? Порадуй котэ, <a href="#" onClick={(e) => click(e)}>купи.</a></>
};

export default FoodItemBottom;