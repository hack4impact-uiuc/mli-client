import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom';
import styles from './ImageDisplays.css';
import routes from '../constants/routes';

import apLabeled1 from './ap-labeled1.png';
import apLabeled2 from './ap-labeled2.png';
import latLabeled1 from './lat-labeled1.png';
import latLabeled2 from './lat-labeled2.png';

type Props = {};

export default class Labeled extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.tabs} data-tid="tabs">
          <Link to="/Labeled">
            <button type="button" className={styles.selected} data-tid="selected">Labeled Images</button>
          </Link>
          <Link to="/Overlayed">
            <button type="button" className={styles.unselected} data-tid="unselected">Overlayed Images</button>
          </Link>
        </div>
        <div className={styles.images} data-tid="images">
          <iframe id="iframe1" src={apLabeled1} height="75%" width="100%"></iframe>
          <iframe id="iframe2" src={apLabeled2} height="75%" width="100%"></iframe>
        </div>


      </div>
    );
  }
}
// <div className={styles.images} data-tid="images">
//   <img src={test1} />
//   <img src={test2} />
//   <img src={test3} />
// </div>