import React from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import { useSelector } from 'react-redux';

import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import RollBlock from '../../components/RollBlock/RollBlock';
import Skeleton from '../../components/RollBlock/Skeleton';
import Pagination from '../../components/Pagination/Pagination';
import ContentError from '../../components/ContentError/ContentError';

import { setCurrentPageCount, setFilters } from '../../redux/Filter/slice';
import { SearchRollParamsType } from '../../redux/Filter/types'
import { fetchRoll } from '../../redux/Roll/asyncActions';
import { RootState, useAppDispatch } from '../../redux/store';
import { RollType } from '../../redux/Roll/types';

import styles from './Rolls.module.scss';

const Rolls: React.FC = () => {
  //Состояние filterReducer
  let { searchValue, categoryId, currentPage, sort } = useSelector((state: RootState) => state.filterReducer);
  //Состояние rollReducer
  let { items, countRolls, status } = useSelector((state: RootState) => state.rollReducer);

  let navigate = useNavigate();
  let dispatch = useAppDispatch();

  //Флаг - (есть или нет) что-то в адресной строке
  let isSearch = React.useRef<boolean>(false);
  //Флаг первого монтирования компонента
  let isMounted = React.useRef<boolean>(false);

  //По возрастанию - по убыванию
  let [orderType, setOrderType] = React.useState<string>('asc');

  //Количество товаров отоброжаемых на главной странице
  let itemsPerPage = 8;

  //Функция выбора отображаемой страницы
  let onChangePage = (page: number) => {
    dispatch(setCurrentPageCount(page));
  };

  //Вшивает параметры из состояния (категории, сортировка) в адресную строку
  React.useEffect(() => {
    if (isMounted.current) {
      let queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort, orderType, currentPage, searchValue]);

  //При первом рендере (если в адресной строке что-то есть) берет параметры из адресной строки и меняет состояние
  React.useEffect(() => {
    if (window.location.search) {
      let params = qs.parse(window.location.search.slice(1)) as SearchRollParamsType;

      dispatch(
        setFilters({
          ...params,
        }),
      );
      isSearch.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      let category = categoryId > 0 ? `category=${categoryId}` : '';
      let search = searchValue ? `&search=${searchValue}` : '';

      dispatch(
        fetchRoll({
          currentPage,
          itemsPerPage,
          category,
          sort: sort.sortProperty,
          orderType,
          search,
        }),
      );
    }

    isSearch.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort, orderType, currentPage, searchValue]);

  let rolls = items.map((item: RollType) => <RollBlock key={item.title} {...item} />);

  let skeletons = [...new Array(10)].map((item, index) => <Skeleton key={index} />);

  return (
    <div className={styles.container}>
      <div className={styles.contentTop}>
        <Categories />
        <Sort
          value={sort}
          orderType={orderType}
          setOrderType={setOrderType}
        />
      </div>
      <h2 className={styles.contentTitle}>РОЛЛЫ</h2>
      {status === 'error' ? (
        <ContentError />
      ) : (
        <div className={status === 'success' && (searchValue.length > 0 && items.length === 0) ? `${styles.contentItemsNotInfo}` : styles.contentItems}>
          {status === 'loading' ? skeletons : (
          searchValue.length > 0 && items.length === 0 ? <h2 className={styles.nothingFound}>Ничего не найдено 😕</h2> : rolls)}
        </div>
      )}
      <div style={status === 'success' && (searchValue.length > 0 && items.length === 0) ? {visibility: "hidden"} : {visibility: "visible"}}>
        <Pagination onChangePage={onChangePage} countRolls={countRolls} itemsPerPage={itemsPerPage} />
      </div>
    </div>
  );
}

export default Rolls;
