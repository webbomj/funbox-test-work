import React, {FC} from 'react';
import { FoodItemBottomProps } from '../../types/FoodItemBottom';
import s from "./FoodItem.module.css"

const FoodItemBottom:FC<FoodItemBottomProps> = ({isSelected, isBlocked, taste, description}) => {
  if (isBlocked) return <div className={s.bottomBlocked}>Печалька, {taste} закончился.</div>
  if (isSelected && !isBlocked) return <>description</>
  else return  <>Чего сидишь? Порадуй котэ, <a href="#">купи.</a></>
};

export default FoodItemBottom;