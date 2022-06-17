import s from './FoodList.module.css'
import FoodItem from '../FoodItem/FoodItem';

const FoodList = () => {
  return (
    <div className={s.foodList}>
      <h1 className={s.header}>Ты сегодня покормил кота?</h1>
      <FoodItem />
    </div>
  );
};

export default FoodList;