import { useEffect } from 'react';
import { useAppDispatch } from './redux';
import { dataSlice } from '../store/slices/dataSlice';

export const useLazyLoadData = () => {
  const dispatch = useAppDispatch();
  const { setData } = dataSlice.actions;
  return useEffect(() => {
    import('../data.json').then(data => {
      dispatch(setData(Array.from(data)));
    });
  }, [dispatch, setData]);
};
