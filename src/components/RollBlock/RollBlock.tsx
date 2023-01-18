import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addItem, minusItem, removeItem } from '../../redux/Cart/slice';
import { CartItemType } from '../../redux/Cart/types';
import { RootState } from '../../redux/store';

import styles from './RollBlock.module.scss'

let typeNames = ['мини', 'стандарт'];

type RollBlockProps = {
  id: string;
  title: string;
  structure: string;
  price: number[];
  imageUrl: string;
  types: number[];
}

const RollBlock: React.FC<RollBlockProps> = ({ id, title, structure, price, imageUrl, types }) => {
  let dispatch = useDispatch();
  let [activeType, setActiveType] = React.useState<number>(0);

  let cartItem = useSelector((state: RootState) =>
    state.cartReducer.items.find((obj) => obj.id === id && obj.type === typeNames[activeType]),
  );

  let addedCount = cartItem ? cartItem.count : 0;

  let onClickPlusItem = () => {
    let item: CartItemType = {
      id,
      title,
      price: price[activeType],
      imageUrl,
      type: typeNames[activeType],
      count: 0
    };
    dispatch(addItem(item));
  };

  let onClickMinusItem = () => {
    let item: CartItemType = {
      id,
      title,
      price: price[activeType],
      imageUrl,
      type: typeNames[activeType],
      count: 0
    };
    dispatch(addItem(item));
    if (addedCount === 1) {
      dispatch(removeItem(item));
    } else {
      dispatch(minusItem(item));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.rollBlock}>
        <Link to={`roll/${id}`}>
          <img className={styles.rollBlockImage} src={imageUrl} alt="Roll" />
          <h4 className={styles.rollBlockTitle}>{title}</h4>
        </Link>
        <div className={styles.rollBlockDescription}>
          <p>{structure}</p>
        </div>
        <div className={styles.rollBlockSelector}>
          <ul>
            {types.map((type, index) => (
              <li
                onClick={() => setActiveType(type)}
                className={activeType === index ? `${styles.active}` : ''}
                key={index}>
                {typeNames[type]}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.rollBlockBottom}>
          <div className={styles.rollBlockPrice}>{price[activeType]} ₽</div>
          <div className={styles.addProduct}>
            {addedCount > 0 &&
              <React.Fragment>
                <button
                  onClick={onClickMinusItem}
                  className={styles.buttonMinus}>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                      fill="#EB5A1E"
                    />
                    <path
                      d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                      fill="#EB5A1E"
                    />
                  </svg>
                </button>
                <b>{addedCount}</b>
              </React.Fragment>
              }   
              <button
                onClick={onClickPlusItem}
                className={styles.buttonPlus}>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                    fill="#EB5A1E"
                  />
                  <path
                    d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                    fill="#EB5A1E"
                  />
                </svg>
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default RollBlock;
