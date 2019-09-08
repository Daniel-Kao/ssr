import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.css';
import withStylesHoc from '../withStylesHoc';

const Header = () => {
  return (
    <div className={styles.test}>
      <Link to="/">Home</Link>
      <Link to="/login">login</Link>
    </div>
  );
};

export default withStylesHoc(Header, styles);
