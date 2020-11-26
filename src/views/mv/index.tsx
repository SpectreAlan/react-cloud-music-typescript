import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store/reducer";
import {getMv, getTypes} from "../../store/modules/mv/actions";
import Loading from "../../components/loading";
import Search from "../../components/search";
import Nav from './nav'
import MvList from './mvList'

const Mv = () => {
  const {list, loading, types} = useSelector((state: RootState) => ({
    list: state.mv.list,
    loading: state.mv.loading,
    types: state.mv.types
  }));

  const dispatch = useDispatch()

  useEffect(() => {
    if (!types.length) {
      dispatch(getTypes());
    }
  }, [])

  const updateCategory = (val: number) => {
    dispatch(getMv(val))
  }

  return (
    <>
      <Search/>
      <Nav list={types} updateCategory={updateCategory}/>
      {
        loading ? <Loading/> : <MvList list={list}/>
      }
    </>
  );
};

export default React.memo(Mv);
