import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { actions } from './store';
import styles from './style.css';
import withStylesHoc from '../../components/withStylesHoc';

const Home = props => {
  useEffect(() => {
    if (!props.newsList.length) {
      props.getNewsList();
    }
  }, []);
  function formList() {
    const { newsList } = props;
    return newsList.map(item => <div key={item.id}>{item.title}</div>);
  }
  return (
    <div>
      <Header />
      {props.name}
      <button>gogogo</button>
      <div>{formList()}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  name: state.home.name,
  newsList: state.home.newsList,
});

const mapDispatchToProps = dispatch => ({
  getNewsList() {
    dispatch(actions.getNewsList());
  },
});

const ExportHome = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStylesHoc(Home, styles));

ExportHome.loadData = store => {
  return store.dispatch(actions.getNewsList());
};

export default ExportHome;
