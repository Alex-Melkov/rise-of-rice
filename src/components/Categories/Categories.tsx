import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId } from '../../redux/Filter/slice';
import { RootState } from '../../redux/store';

import styles from './Categories.module.scss';

let categories = ['Все', 'Запеченные', 'Холодные', 'Жареные'];

const Categories: React.FC = React.memo(() => {
  let categoryId = useSelector((state: RootState) => state.filterReducer.categoryId);
  let dispatch = useDispatch();

  let onChangeCategory = (index: number) => {
    dispatch(setCategoryId(index));
  };

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              key={item}
              onClick={() => onChangeCategory(index)}
              className={categoryId === index ? `${styles.active}` : ''}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
})

export default Categories;
