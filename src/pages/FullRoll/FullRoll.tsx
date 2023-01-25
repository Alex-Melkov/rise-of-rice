import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Loader from '../../components/Loader/Loader';

import { addItem, minusItem, removeItem } from '../../redux/Cart/slice';
import { RootState } from '../../redux/store';
import { CartItemType } from '../../redux/Cart/types';

import styles from './FullRoll.module.scss';

let typeNames = ['мини', 'стандарт'];

const FullRoll: React.FC = () => {
  let [roll, setRoll] = React.useState<{
    imageUrl: string;
    title: string;
    weight: number[];
    structure: string;
    price: number[];
  }>();

  let [activeType, setActiveType] = React.useState<number>(0);

  let { id } = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let cartItemId = useSelector((state: RootState) =>
    state.cartReducer.items.find((obj) => obj.id === id),
  );

  React.useEffect(() => {
    function setActiveTypeRoll() {
      if (cartItemId) {     
        if (cartItemId.type === 'стандарт') {       
          setTimeout(() => setActiveType(1), 0)
        } else if (cartItemId.type === 'мини') {
          setTimeout(() => setActiveType(0), 0)
        }
      }
    }
  setActiveTypeRoll()
  // eslint-disable-next-line
  }, [])
  
  React.useEffect(() => {
    async function fetchRoll() {
      try {
        let { data } = await axios.get('https://6358b289c26aac906f46af7c.mockapi.io/items/' + id);
        setRoll(data.items);
      } catch (error) {
        alert('Ошибка при получении ролла');
        navigate('/rolls');
      }
    }
    fetchRoll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let cartItem = useSelector((state: RootState) =>
    state.cartReducer.items.find((obj) => obj.id === id && obj.type === typeNames[activeType]),
  );

  let addedCount = cartItem ? cartItem.count : 0;

  let onClickPlusItem = () => {
    let item : CartItemType;
    if (roll && id) {
      item = {
        id,
        title: roll.title,
        price: roll.price[activeType],
        imageUrl: roll.imageUrl,
        type: typeNames[activeType],
        count: 0,
        unicId: id + activeType
      };
    dispatch(addItem(item));
    }
  };

  let onClickMinusItem = () => {
    let item : CartItemType;
    if (roll && id) {
      item = {
        id,
        title: roll.title,
        price: roll.price[activeType],
        imageUrl: roll.imageUrl,
        type: typeNames[activeType],
        count: 0,
        unicId: id + activeType
      };
      dispatch(minusItem(item));
      if (addedCount === 1) {
        dispatch(removeItem(item));
      }
    }
  };

  let goBack = () => {
    navigate(-1);
  };

  if (!roll) {
    return <Loader />
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerRoll}>
        <div className={styles.imageBlock}>
          <img src={roll.imageUrl} alt="FullRoll" />
        </div>
        <div className={styles.content}>
          <div className={styles.description}>
            <h2 className={styles.title}>{roll.title}</h2>
            <div className={styles.weight}>Вес:
              <p>{roll.weight[activeType]} г</p>
            </div>
            <div className={styles.structure}>Состав:
              <p>{roll.structure}.</p>
            </div>
          </div>
          <div className={styles.purchase}>
            <div className={styles.priceAndType}>
              <div className={styles.rollType}>
                <ul>
                  {typeNames.map((type, index) => (
                    <li
                      onClick={() => setActiveType(index)}
                      className={activeType === index ? `${styles.active}` : ''}
                      key={index}>
                      {typeNames[index]}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.price}>{roll.price[activeType]} ₽</div>
            </div>
            <div className={styles.addProduct}>
              { addedCount === 0 ?
                <button className={styles.addInCart} onClick={onClickPlusItem}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  В корзину
                </button>
                :
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
              </React.Fragment>
              }
            </div>
          </div>
          <button className={styles.goBack} onClick={goBack}>Вернуться назад</button>
        </div>
      </div>
    </div>
  );
}

export default FullRoll;
