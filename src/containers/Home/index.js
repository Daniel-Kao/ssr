import React from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';

const Home = props => {
  function handleClick() {
    console.log(123);
  }
  return (
    <div>
      <Header />
      {props.name}
      <button onClick={handleClick}>gogogo</button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: state.home.name,
});

export default connect(mapStateToProps)(Home);
