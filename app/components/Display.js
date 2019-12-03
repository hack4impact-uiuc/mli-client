import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Display.css';
import routes from '../constants/routes';

// import ap-output from './ap-output.png';
// import lat-output from './lat-output.png';

type Props = {};

export default class Display extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>

      // <div>
      //   <img src={ap-output}>
      //   <img src={lat-output}>
      // </div>

    );
  }
}
