import React from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import { setSearchValue } from '../../redux/Filter/slice';

import styles from './Search.module.scss';

const Search: React.FC = () => {
  let dispatch = useDispatch();
  //Локальное состояние поля ввода
  let [value, setValue] = React.useState<string>('');

  let inputRef = React.useRef<HTMLInputElement>(null);

  //Очищает поле ввода и оставляет фокус на нем
  let onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    if (inputRef.current) {
    inputRef.current.focus();
    }
  };

  //Ссылка на функцию debounce
  //eslint-disable-next-line react-hooks/exhaustive-deps
  let updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 1000),
    [],
  );

  //Функция которая следит за изменениями в поле ввода
  let onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.search}>
      <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <title />
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск роллов..."
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
      )}
    </div>
  );
}

export default Search;
